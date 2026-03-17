import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the pokedex",
      callback: commandExit
    },
    help: {
      name: "help",
      description: "get some help",
      callback: commandHelp
    }
  }
}
