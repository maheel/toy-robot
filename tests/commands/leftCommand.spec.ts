import { LeftCommand } from '../../src/commands/leftCommand';
import { Robot } from '../../src/robot';
jest.mock('../../src/robot');

describe('LeftCommand', () => {
  describe('execute', () => {
    it('rotates robot successfully', async () => {
      const robot = new Robot();
      const leftCommand = new LeftCommand(robot);

      const actualResult = leftCommand.execute();

      expect(robot.getCurrentDirection).toHaveBeenCalled();
      expect(robot.setCurrentDirection).toHaveBeenCalled();
      expect(actualResult).toBe(true);
    });
  });
});
