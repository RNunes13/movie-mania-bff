/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const axios = require('axios');

const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO } = process.env;

const createFile = (path, name, content) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  return fs.promises.writeFile(`${path}/${name}`, content);
};

const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;

  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    const keys = Object.keys(source);
    keys.forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }
  return mergeDeep(target, ...sources);
};

exports.buildNConfEnvVars = (paramsPath, env) => {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${paramsPath}.json`;

  const configDir = '../src/config/files';
  const configBaseName = `${env}.json`;

  return axios
    .get(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3.raw',
      },
    })
    .then(({ data }) => {
      const obj = mergeDeep({}, data);
      createFile(configDir, configBaseName, JSON.stringify(obj));
    });
};
