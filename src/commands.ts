import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapB } from "./command_map.js";

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
    },
    map: {
      name: "map",
      description: "It displays the names of 20 location areas in the Pokemon world. Each subsequent call to map should display the next 20 locations, and so on.",
      callback: commandMap
    },
    mapb: {
      name: "mapb",
      description: "show previous 20 locations",
      callback: commandMapB
    }
  }
}
