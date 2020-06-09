import { ValidCommand } from '../enums/validCommand';

/**
 * Check if the command is a valid one
 * @param command
 */
export const isValidCommand = (command: string): boolean => {
  let isValid: boolean = false;

  if (command in ValidCommand) {
    isValid = true;
  }

  return isValid;
};
