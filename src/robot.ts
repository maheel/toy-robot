/**
 * Robot class
 */
export class Robot {
  private currentPositionX: number;
  private currentPositionY: number;
  private currentDirection: string;

  public setCurrentPositionX(currentPositionX: number): void {
    this.currentPositionX = currentPositionX;
  }

  public getCurrentPositionX(): number {
    return this.currentPositionX;
  }

  public setCurrentPositionY(currentPositionY: number): void {
    this.currentPositionY = currentPositionY;
  }

  public getCurrentPositionY(): number {
    return this.currentPositionY;
  }

  public setCurrentDirection(currentDirection: string): void {
    this.currentDirection = currentDirection;
  }

  public getCurrentDirection(): string {
    return this.currentDirection;
  }
}
