module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-labfaz`
  extends: ['labfaz'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
