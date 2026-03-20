import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const pokemons = state.caughtPokemon[args[0]]
  if (!pokemons) {
    console.log("not found caught the Pokemon")
  }

  console.log(`Name: ${pokemons.name}`)
  console.log(`Height: ${pokemons.height}`)
  console.log(`Weight: ${pokemons.weight}`)
  console.log(`Stats:`)
  pokemons.stats.forEach(stat => {
    console.log(`   - ${stat.stat.name}: ${stat.base_stat}`)
  })
  console.log(`Types: `)
  pokemons.types.forEach(type => {
    console.log(`   - ${type.type.name}`)
  })
}