import { CommandInterface } from './commandInterface';
import { isValidPosition } from '../validators/isValidPosition';
import { Command } from './command';
import { ValidDirection } from '../enums/validDirection';
import { Robot } from '../robot';

/**
 * Move command
 */
export class MoveCommand extends Command implements CommandInterface {
  constructor(robot: Robot) {
    super(robot);
  }

  /**
   * Move the robot forward
   */
  public execute(): boolean {
    console.log('Execute Move');

    let currentPositionX = this.robot.getCurrentPositionX();
    let currentPositionY = this.robot.getCurrentPositionY();
    const currentDirection = this.robot.getCurrentDirection();

    switch (currentDirection) {
      case ValidDirection.NORTH:
        currentPositionY += 1;
        break;

      case ValidDirection.EAST:
        currentPositionX += 1;
        break;

      case ValidDirection.SOUTH:
        currentPositionY -= 1;
        break;

      case ValidDirection.WEST:
        currentPositionX -= 1;
        break;
    }

    let isMoved = false;

    if (isValidPosition(currentPositionX, currentPositionY)) {
      isMoved  = true;

      this.robot.setCurrentPositionX(currentPositionX);
      this.robot.setCurrentPositionY(currentPositionY);
    }

    return isMoved;
  }
}
