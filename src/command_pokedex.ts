import { State } from "./state.js"

export async function commandPokedex(state: State) {
  const pokemons = state.caughtPokemon
  
  if (Object.keys(pokemons).length === 0) {
    console.log(`Don\`t have any pokemon`)
    return
  }

  console.log(`Your Pokedex:`)
  for (const pokemon of Object.keys(pokemons)) {
    console.log(`   - ${pokemon}`)
  }
}