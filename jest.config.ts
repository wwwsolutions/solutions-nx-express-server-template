const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/server',
    '<rootDir>/libs/server/models',
    '<rootDir>/libs/server/routes',
    '<rootDir>/libs/server/controllers',
    '<rootDir>/libs/server/middleware',
    '<rootDir>/libs/server/utils',
  ],
};
