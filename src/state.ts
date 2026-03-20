import { createInterface, type Interface } from "node:readline"
import { stdin, stdout } from "node:process"
import { getCommands } from "./commands.js"
import { PokeAPI, Pokemon } from "./pokeapi.js"

export type CLICommand = {
  name: string
  description: string
  callback: (state: State, ...args: string[]) => Promise<void>
}

export type State = {
    interface: Interface,
    commands: Record<string, CLICommand>,
    caughtPokemon: Record<string, Pokemon>
    pokeApi: PokeAPI,
    nextLocationsURL: string | undefined
    prevLocationsURL: string | undefined
}

export function initState(cacheInterval: number): State {
  return {
    interface: createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex >"
    }),
    commands: getCommands(),
    caughtPokemon: {},
    pokeApi: new PokeAPI(cacheInterval),
    nextLocationsURL: undefined,
    prevLocationsURL: undefined
  }
}
