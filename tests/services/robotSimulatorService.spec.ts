import { executeCommands } from '../../src/services/robotSimulatorService';

describe('robotSimulatorService', () => {
  describe('executeCommands', () => {
    it('moves robot successfully', async () => {
      const commands: string[] = [
        'PLACE 1,2,EAST',
        'MOVE',
        'MOVE',
        'LEFT',
        'MOVE',
        'REPORT',
      ];
      const actualResult = executeCommands(commands);

      const expectedResult = '3,3,NORTH';

      expect(actualResult).toBe(expectedResult);
    });

    it('does not fall when invalid command is given', async () => {
      const commands: string[] = [
        'PLACE 0,1,SOUTH',
        'MOVE',
        'MOVE',
        'MOVE',
        'REPORT',
      ];
      const actualResult = executeCommands(commands);

      const expectedResult = '0,0,SOUTH';

      expect(actualResult).toBe(expectedResult);
    });

    it('ignores when incorrect command is given', async () => {
      const commands: string[] = [
        'PLACE 0,1,SOUTH',
        'MOVE',
        'RUN',
        'RIGHT',
        'MOVE',
        'REPORT',
      ];
      const actualResult = executeCommands(commands);

      const expectedResult = '0,0,WEST';

      expect(actualResult).toBe(expectedResult);
    });

    it('returns error message when invalid place is given', async () => {
      const commands: string[] = [
        'PLACE 0,1,SOUTH',
        'MOVE',
        'RUN',
        'RIGHT',
        'MOVE',
        'REPORT',
      ];
      try {
        executeCommands(commands);
      } catch (error) {
        expect(error.message).toBe('Invalid place command!. Please correct it and try again.');
      }
    });
  });
});
