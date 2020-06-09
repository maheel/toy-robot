import { CommandFactory } from '../../src/commands/commandFactory';
import { Command } from '../../src/commands/command';
jest.mock('../../src/robot');

describe('LeftCommand', () => {
  describe('execute', () => {
    it('rotates robot successfully', async () => {
      const commandFactory = new CommandFactory();
      const actualResult = commandFactory.create('RIGHT');

      expect(actualResult).toBeInstanceOf(Command);
    });
  });
});
