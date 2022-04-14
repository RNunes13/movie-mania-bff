import * as nconf from 'nconf';

const init = () => {
  nconf.argv().env();
  nconf.env({ separator: '__' });

  const envName = nconf.get('NODE_ENV');
  const overridableEnvironments = ['test', 'development', 'production'];

  if (overridableEnvironments.includes(envName)) {
    nconf.file(envName, `${process.cwd()}/src/config/files/${envName}.json`);
  }

  nconf.file('local', `${process.cwd()}/src/config/files/local.json`);

  return nconf;
};

const config = init();

export default config;
