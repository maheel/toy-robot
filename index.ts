const inquirer = require('inquirer');
import { RobotSimulatorService } from './src/services/robotSimulatorService';
import { ValidCommand } from './src/enums/validCommand';
import { isValidPlaceCommand } from './src/validators/isValidPlaceCommand';

const questions: object = [
  {
    type: 'input',
    name: 'command',
    message: 'Please enter the command >>',
  },
];

const commands: string[] = [];

/**
 *
 */
const prompt = () => {
  inquirer.prompt(questions)
    .then((input) => {
      const command: string = input.command.toUpperCase();

      if (commands.length === 0 && !isValidPlaceCommand(command)) {
        throw new Error('Please enter a valid place command as the first command!');
      }

      commands.push(command);

      if (command !== ValidCommand.REPORT) {
        prompt();
      } else {
        const robotSimulatorService  = new RobotSimulatorService();
        const response: string = robotSimulatorService.executeCommands(commands);
        console.log('Current position is:', response);
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};

prompt();
