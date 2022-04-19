/* eslint-disable @typescript-eslint/no-var-requires */
const { series } = require('gulp');
const del = require('del');
const utils = require('./utils');

const env = process.env.NODE_ENV;
const service = process.env.SERVICE_NAME;

console.log('env', env);

const clean = () => del([`../config/files/${env}.json`], { force: true });

const buildNConfEnvVars = async () =>
  utils.buildNConfEnvVars(`secrets/${service}/${env}`);

exports.clean = clean;
exports.build = series(clean, buildNConfEnvVars);
exports.default = exports.build;
