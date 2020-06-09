import { MoveCommand } from '../../src/commands/moveCommand';
import { Robot } from '../../src/robot';
import * as ValidPosition from '../../src/validators/isValidPosition';
jest.mock('../../src/robot');

describe('MoveCommand', () => {
  describe('execute', () => {
    let isValidPosition;

    afterEach(() => {
      isValidPosition.mockClear();
    });

    it('moves robot successfully', async () => {
      const robot = new Robot();
      const moveCommand: MoveCommand = new MoveCommand(robot);

      isValidPosition = jest.spyOn(ValidPosition, 'isValidPosition').mockReturnValue(true);
      const actualResult = moveCommand.execute();

      expect(robot.getCurrentPositionX).toHaveBeenCalled();
      expect(robot.getCurrentPositionY).toHaveBeenCalled();
      expect(robot.getCurrentDirection).toHaveBeenCalled();
      expect(robot.setCurrentPositionX).toHaveBeenCalled();
      expect(robot.setCurrentPositionY).toHaveBeenCalled();
      expect(actualResult).toBe(true);
    });

    it('does not move robot when invalid command is given', async () => {
      const robot = new Robot();
      const moveCommand: MoveCommand = new MoveCommand(robot);

      isValidPosition = jest.spyOn(ValidPosition, 'isValidPosition').mockReturnValue(false);
      const actualResult = moveCommand.execute();

      expect(robot.getCurrentPositionX).toHaveBeenCalled();
      expect(robot.getCurrentPositionY).toHaveBeenCalled();
      expect(robot.getCurrentDirection).toHaveBeenCalled();
      expect(robot.setCurrentPositionX).toHaveBeenCalledTimes(0);
      expect(robot.setCurrentPositionY).toHaveBeenCalledTimes(0);
      expect(actualResult).toBe(false);
    });
  });
});
