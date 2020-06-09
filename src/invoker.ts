import { CommandInterface } from './commands/commandInterface';

/**
 * Invoker class
 */
export class Invoker {
  private command: CommandInterface;

  /**
   * Set the command
   * @param command
   */
  public setCommand(command: CommandInterface) {
    this.command = command;
  }

  /**
   * Run the command with provided arguments
   * @param args
   */
  public run(args?: string[]) {
    return this.command.execute(args);
  }
}
