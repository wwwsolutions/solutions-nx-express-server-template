import chalk from 'chalk';

// export const logError = chalk.bold.underline.red;
// export const logErrorMessage = chalk.red;
// export const logWarning = chalk.bold.yellow;
// export const logWarningMessage = chalk.yellow;
// export const logSuccess = chalk.bold.underline.green;
// export const logSuccessMessage = chalk.green;
// export const logData = chalk.magenta;

export const logSuccess = (str) => {
  return console.log(chalk.bold.underline.green(str));
};

export const logSuccessMessage = (str) => {
  return console.log(chalk.green(str));
};

export const logWarning = (str) => {
  return console.log(chalk.bold.underline.yellow(str));
};

export const logWarningMessage = (str) => {
  return console.log(chalk.yellow(str));
};

export const logError = (str) => {
  return console.log(chalk.bold.underline.red(str));
};

export const logErrorMessage = (str) => {
  return console.log(chalk.red(str));
};

export const logData = (objName: string, obj: unknown) => {
  return console.log(chalk.magenta(`${objName}: %O`), obj);
};
