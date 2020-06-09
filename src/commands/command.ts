import { Robot } from '../robot';

/**
 * Command class
 */
export class Command {
  protected robot: Robot;

  /**
   * Class constructor
   * @param robot
   */
  constructor(robot: Robot) {
    this.robot = robot;
  }
}
