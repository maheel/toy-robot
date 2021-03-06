import { CommandInterface } from './commandInterface';
import { isValidPosition } from '../validators/isValidPosition';
import { isValidDirection } from '../validators/isValidDirection';
import { Robot } from '../robot';
import { Command } from './command';

/**
 * Place command
 */
export class PlaceCommand extends Command implements CommandInterface {
  constructor(robot: Robot) {
    super(robot);
  }

  /**
   * Place the robot according to given parameter
   * @param args
   */
  public execute(args : any[]): boolean {
    let isMoved: boolean = false;

    const positionX: number = Number(args[0]);
    const positionY: number = Number(args[1]);
    const direction: string = args[2];

    if (isValidPosition(positionX, positionY) && isValidDirection(direction)) {
      isMoved = true;

      this.robot.setCurrentPositionX(positionX);
      this.robot.setCurrentPositionY(positionY);
      this.robot.setCurrentDirection(direction);
    } else {
      throw new Error('Invalid place command!. Please correct it and try again.');
    }

    return isMoved;
  }
}
