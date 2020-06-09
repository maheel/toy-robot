import { ValidDirection } from '../enums/validDirection';

/**
 * Check if the direction is a valid one
 * @param direction
 */
export const isValidDirection = (direction: string): boolean => {
  let isValid = false;

  if (direction in ValidDirection) {
    isValid = true;
  }

  return isValid;
};
