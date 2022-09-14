module.exports = ({ config }) => {
  config.resolve.modules.push(process.cwd() + '/node_modules');
  config.resolve.modules.push(process.cwd() + '/src');

  // this is necessary for working w/ linked folders
  config.resolve.symlinks = false;

  return config;
};
