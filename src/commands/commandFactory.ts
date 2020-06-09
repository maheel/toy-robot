import { LeftCommand } from './leftCommand';
import { RightCommand } from './rightCommand';
import { PlaceCommand } from './placeCommand';
import { MoveCommand } from './moveCommand';
import { ReportCommand } from './reportCommand';
import { ValidCommand } from '../enums/validCommand';
import { Robot } from '../robot';

/**
 * Command factory
 */
export class CommandFactory {

  private readonly robot: Robot;

  /**
   * Class constructor
   */
  constructor() {
    this.robot = new Robot();
  }

  /**
   * Generates command based on the command type
   * @param commandType
   */
  public create(commandType: string) {
    let commandObject;

    switch (commandType) {
      case ValidCommand.LEFT :
        commandObject = new LeftCommand(this.robot);
        break;
      case ValidCommand.RIGHT :
        commandObject = new RightCommand(this.robot);
        break;
      case ValidCommand.MOVE :
        commandObject = new MoveCommand(this.robot);
        break;
      case ValidCommand.PLACE :
        commandObject = new PlaceCommand(this.robot);
        break;
      case ValidCommand.REPORT :
        commandObject = new ReportCommand(this.robot);
        break;
    }

    return commandObject;
  }
}
