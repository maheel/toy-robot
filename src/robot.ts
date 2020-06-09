/**
 * Robot class
 */
export class Robot {
  private currentPositionX: number;
  private currentPositionY: number;
  private currentDirection: string;

  /**
   * Set current position X axis
   * @param currentPositionX
   */
  public setCurrentPositionX(currentPositionX: number): void {
    this.currentPositionX = currentPositionX;
  }

  /**
   * Get current position X axis
   */
  public getCurrentPositionX(): number {
    return this.currentPositionX;
  }

  /**
   * Set current position Y axis
   * @param currentPositionY
   */
  public setCurrentPositionY(currentPositionY: number): void {
    this.currentPositionY = currentPositionY;
  }

  /**
   * Set current position Y axis
   */
  public getCurrentPositionY(): number {
    return this.currentPositionY;
  }

  /**
   * Set current direction
   * @param currentDirection
   */
  public setCurrentDirection(currentDirection: string): void {
    this.currentDirection = currentDirection;
  }

  /**
   * Set current direction
   */
  public getCurrentDirection(): string {
    return this.currentDirection;
  }
}
