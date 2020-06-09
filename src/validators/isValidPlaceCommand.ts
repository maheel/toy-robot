import { ValidCommand } from '../enums/validCommand';

/**
 * Check if the command is a valid one
 * @param command
 */
export const isValidPlaceCommand = (command: string): boolean => {
  let isValid: boolean = false;

  const commandParts = command.split(' ');
  const commandType = commandParts[0];
  const commandArguments = (typeof commandParts[1] !== 'undefined') ?
    commandParts[1].split(',') : [];

  if ((commandType in ValidCommand) && (commandArguments.length === 3)) {
    isValid = true;
  }

  return isValid;
};
