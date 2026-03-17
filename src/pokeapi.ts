export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    let response: Response

    try {
      if (pageURL) {
        response = await fetch(pageURL)
      } else {
        response = await fetch(PokeAPI.baseURL+"/location-area")
      }

      if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json()
    } catch (e) {
      throw new Error(`Error fetching locations: ${(e as Error).message}`)
    }
  }
}

export type ShallowLocations = {
  next: string,
  previous: string,
  results: {
    name: string,
    url: string
  }[]
};
