import { CommandInterface } from './commandInterface';
import { Robot } from '../robot';
import { Command } from './command';

/**
 * Report command
 */
export class ReportCommand extends Command implements CommandInterface {
  constructor(robot: Robot) {
    super(robot);
  }

  /**
   * Report the current position of the robot
   */
  public execute(): string {
    console.log('Execute Report');

    return `${this.robot.getCurrentPositionX()},${this.robot.getCurrentPositionY()},${this.robot.getCurrentDirection()}`;
  }
}
