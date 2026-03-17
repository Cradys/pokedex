import { State } from "./state.js"


export async function commandMap(state: State) {
  const response = await state.pokeApi.fetchLocations(state.nextLocationsURL)
  state.nextLocationsURL = response.next
  state.prevLocationsURL = response.previous
  response.results.forEach((result) => console.log(result.name))
}

export async function commandMapB(state: State) {
  if (!state.prevLocationsURL) {
    throw new Error("you're on the first page");
  }

  const response = await state.pokeApi.fetchLocations(state.prevLocationsURL)
  state.nextLocationsURL = response.next
  state.prevLocationsURL = response.previous
  response.results.forEach((result) => console.log(result.name))
}