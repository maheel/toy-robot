import { CommandInterface } from './commandInterface';
import { Command } from './command';
import { ValidDirection } from '../enums/validDirection';
import { Robot } from '../robot';

/**
 * Left command
 */
export class LeftCommand extends Command implements CommandInterface {
  constructor(robot: Robot) {
    super(robot);
  }

  /**
   * Valid left movements
   */
  private leftMovements = {
    [ValidDirection.NORTH]: ValidDirection.WEST,
    [ValidDirection.WEST]: ValidDirection.SOUTH,
    [ValidDirection.SOUTH]: ValidDirection.EAST,
    [ValidDirection.EAST]: ValidDirection.NORTH,
  };

  /**
   * Rotate the robot anti-clockwise
   */
  public execute(): boolean {
    console.log('Execute Left');

    const newDirection = this.leftMovements[this.robot.getCurrentDirection()];
    this.robot.setCurrentDirection(newDirection);

    return true;
  }
}
