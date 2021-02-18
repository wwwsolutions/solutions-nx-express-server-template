import chalk from 'chalk';

export const logSuccess = (str: string): void => {
  console.log(chalk.bold.underline.green(str));
};

export const logSuccessMessage = (str: string): void => {
  console.log(chalk.green(str));
};

export const logWarning = (str: string): void => {
  console.log(chalk.bold.underline.yellow(str));
};

export const logWarningMessage = (str): void => {
  console.log(chalk.yellow(str));
};

export const logError = (str: string): void => {
  console.log(chalk.red(str));
};

export const logErrorObject = (obj: unknown): void => {
  const objAsString = JSON.stringify(obj, null, 4);
  console.log(chalk.red(objAsString));
};

export const logData = (objName: string, obj: unknown): void => {
  const objAsString = JSON.stringify(obj, null, 4);
  console.log(chalk.bold.magenta(objName, objAsString));
};
