import { CommandInterface } from './commandInterface';
import { ValidDirection } from '../enums/validDirection';
import { Robot } from '../robot';
import { Command } from './command';

/**
 * Right command
 */
export class RightCommand extends Command implements CommandInterface {
  constructor(robot: Robot) {
    super(robot);
  }

  /**
   * Valid Right movements
   */
  private rightMovements: object = {
    [ValidDirection.NORTH]: ValidDirection.EAST,
    [ValidDirection.EAST]: ValidDirection.SOUTH,
    [ValidDirection.SOUTH]: ValidDirection.WEST,
    [ValidDirection.WEST]: ValidDirection.NORTH,
  };

  /**
   * Rotate the robot clockwise
   */
  public execute(): boolean {
    const newDirection = this.rightMovements[this.robot.getCurrentDirection()];
    this.robot.setCurrentDirection(newDirection);

    return true;
  }
}
