import { State } from "./state.js"

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }
  
  const response = await state.pokeApi.fetchLocation(args[0])
  response.pokemon_encounters.forEach((pokemons) => console.log(pokemons.pokemon.name))
}