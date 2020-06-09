import { Table } from '../enums/table';

/**
 * Check if position is a valid one, Robot should not fall
 * @param positionX
 * @param positionY
 */
export const isValidPosition = (positionX: number, positionY: number): boolean => {
  let isValid = true;

  if (positionX < Table.ORIGIN_X_POSITION ||
      positionY < Table.ORIGIN_Y_POSITION ||
      positionX > (Table.UNITS_X - 1) ||
      positionY > (Table.UNITS_Y - 1)) {
    isValid = false;
  }

  return isValid;
};
