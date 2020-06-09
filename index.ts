const inquirer = require('inquirer');
import { executeCommands } from './src/services/robotSimulatorService';
import { ValidCommand } from './src/enums/validCommand';

const questions = [
  {
    type: 'input',
    name: 'command',
    message: 'Please enter the command >>>',
  },
];

const commands: string[] = [];

/**
 *
 */
const prompt = () => {
  inquirer.prompt(questions)
    .then((input) => {
      const command: string = input.command;
      commands.push(command);

      if (command !== ValidCommand.REPORT) {
        prompt();
      } else {
        const response: string = executeCommands(commands);
        console.log('Current position is:', response);
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};

prompt();
