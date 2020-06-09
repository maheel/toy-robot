import { CommandFactory } from '../commands/commandFactory';
import { Invoker } from '../invoker';
import { isValidCommand } from '../validators/isValidCommand';

/**
 * Execute a commands
 * @param commands
 */
export const executeCommands = (commands: string[]) => {
  console.log('All commands', commands);

  const commandFactory = new CommandFactory();

  const response = commands.map((command) => {
    const commandParts = command.split(' ');
    const commandType = commandParts[0];

    const commandArguments = (typeof commandParts[1] !== 'undefined') ?
      commandParts[1].split(',') : [];

    if (isValidCommand(commandType)) {
      const commandObject = commandFactory.create(commandType);

      const invoker = new Invoker();
      invoker.setCommand(commandObject);

      return invoker.run(commandArguments);
    }
  });

  console.log(response);
  return response.pop();
};
