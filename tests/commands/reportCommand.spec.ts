import { ReportCommand } from '../../src/commands/reportCommand';
import { Robot } from '../../src/robot';
jest.mock('../../src/robot');

describe('ReportCommand', () => {
  describe('execute', () => {
    it('reports position of the robot successfully', async () => {
      const robot = new Robot();
      const reportCommand: ReportCommand = new ReportCommand(robot);

      const actualResult = reportCommand.execute();

      expect(robot.getCurrentPositionX).toHaveBeenCalled();
      expect(robot.getCurrentPositionY).toHaveBeenCalled();
      expect(robot.getCurrentDirection).toHaveBeenCalled();
      expect(typeof actualResult).toBe('string');
    });
  });
});
