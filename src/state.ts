import { createInterface, type Interface } from "node:readline"
import { stdin, stdout } from "node:process"
import { getCommands } from "./commands.js"
import { PokeAPI } from "./pokeapi.js"

export type CLICommand = {
  name: string
  description: string
  callback: (state: State) => Promise<void>
}

export type State = {
    interface: Interface,
    commands: Record<string, CLICommand>,
    pokeApi: PokeAPI,
    nextLocationsURL: string | undefined
    prevLocationsURL: string | undefined
}

export function initState(): State {
  return {
    interface: createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex >"
    }),
    commands: getCommands(),
    pokeApi: new PokeAPI,
    nextLocationsURL: undefined,
    prevLocationsURL: undefined
  }
}
