/**
 * Command interface
 */
export interface CommandInterface {
  /**
   * Execute command
   * @param args
   */
  execute(args?: any[]): any;
}
