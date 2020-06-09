import { RightCommand } from '../../src/commands/rightCommand';
import { Robot } from '../../src/robot';
jest.mock('../../src/robot');

describe('LeftCommand', () => {
  describe('execute', () => {
    it('rotates robot successfully', async () => {
      const robot = new Robot();
      const rightCommand: RightCommand = new RightCommand(robot);

      const actualResult = rightCommand.execute();

      expect(robot.getCurrentDirection).toHaveBeenCalled();
      expect(robot.setCurrentDirection).toHaveBeenCalled();
      expect(actualResult).toBe(true);
    });
  });
});
