import { PlaceCommand } from '../../src/commands/placeCommand';
import { Robot } from '../../src/robot';
import * as ValidPosition from '../../src/validators/isValidPosition';
import * as ValidDirection from '../../src/validators/isValidDirection';
jest.mock('../../src/robot');

describe('PlaceCommand', () => {
  describe('execute', () => {
    let isValidPosition;
    let isValidDirection;

    afterEach(() => {
      isValidPosition.mockClear();
      isValidDirection.mockClear();
    });

    it('places robot successfully with valid place command', async () => {
      const robot = new Robot();
      const placeCommand: PlaceCommand = new PlaceCommand(robot);

      isValidPosition = jest.spyOn(ValidPosition, 'isValidPosition').mockReturnValue(true);
      isValidDirection = jest.spyOn(ValidDirection, 'isValidDirection').mockReturnValue(true);

      const args = ['0', '0', 'NORTH'];
      const actualResult = placeCommand.execute(args);

      expect(robot.setCurrentPositionX).toHaveBeenCalled();
      expect(robot.setCurrentPositionY).toHaveBeenCalled();
      expect(robot.setCurrentDirection).toHaveBeenCalled();
      expect(actualResult).toBe(true);
    });

    it('throws an error when position is invalid', async () => {
      const robot = new Robot();
      const placeCommand: PlaceCommand = new PlaceCommand(robot);

      isValidPosition = jest.spyOn(ValidPosition, 'isValidPosition').mockReturnValue(false);
      isValidDirection = jest.spyOn(ValidDirection, 'isValidDirection').mockReturnValue(true);

      try {
        const args = ['-1', '0', 'NORTH'];
        placeCommand.execute(args);

        expect(robot.setCurrentPositionX).toHaveBeenCalledTimes(0);
        expect(robot.setCurrentPositionY).toHaveBeenCalledTimes(0);
        expect(robot.setCurrentDirection).toHaveBeenCalledTimes(0);
      } catch (error) {
        expect(error.message).toBe('Invalid place command!. Please correct it and try again.');
      }
    });

    it('throws an error when direction is invalid', async () => {
      const robot = new Robot();
      const placeCommand: PlaceCommand = new PlaceCommand(robot);

      isValidPosition = jest.spyOn(ValidPosition, 'isValidPosition').mockReturnValue(true);
      isValidDirection = jest.spyOn(ValidDirection, 'isValidDirection').mockReturnValue(false);

      try {
        const args = ['0', '0', 'UP'];
        placeCommand.execute(args);

        expect(robot.setCurrentPositionX).toHaveBeenCalledTimes(0);
        expect(robot.setCurrentPositionY).toHaveBeenCalledTimes(0);
        expect(robot.setCurrentDirection).toHaveBeenCalledTimes(0);
      } catch (error) {
        expect(error.message).toBe('Invalid place command!. Please correct it and try again.');
      }
    });

    it('throws an error when both direction and position are invalid', async () => {
      const robot = new Robot();
      const placeCommand: PlaceCommand = new PlaceCommand(robot);

      isValidPosition = jest.spyOn(ValidPosition, 'isValidPosition').mockReturnValue(false);
      isValidDirection = jest.spyOn(ValidDirection, 'isValidDirection').mockReturnValue(false);

      try {
        const args = ['-1', '0', 'UP'];
        placeCommand.execute(args);

        expect(robot.setCurrentPositionX).toHaveBeenCalledTimes(0);
        expect(robot.setCurrentPositionY).toHaveBeenCalledTimes(0);
        expect(robot.setCurrentDirection).toHaveBeenCalledTimes(0);
      } catch (error) {
        expect(error.message).toBe('Invalid place command!. Please correct it and try again.');
      }
    });
  });
});
