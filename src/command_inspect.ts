import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const caughtPokemon = state.caughtPokemon[args[0]]
  if (!caughtPokemon) {
    console.log("not found caught the Pokemon")
  }

  console.log(`Name: ${caughtPokemon.name}`)
  console.log(`Height: ${caughtPokemon.height}`)
  console.log(`Weight: ${caughtPokemon.weight}`)
  console.log(`Stats:`)
  caughtPokemon.stats.forEach(stat => {
    console.log(`   - ${stat.stat.name}: ${stat.base_stat}`)
  })
  console.log(`Types: `)
  caughtPokemon.types.forEach(type => {
    console.log(`   - ${type.type.name}`)
  })
}