import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const response = await state.pokeApi.fetchPokemon(args[0])
  console.log(`Throwing a Pokeball at ${args[0]}...`)

  const chance = 1 / (1 + response.base_experience / 100)
  const roll = Math.random()

  if (roll < chance) {
    state.caughtPokemon[response.name] = response
    console.log(`Pokemon ${response.name} catched and add to inventory`)
  }
  console.log(`Pokemon ${response.name} run away`)
}