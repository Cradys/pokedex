import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache: Cache

  constructor(cacheInterval: number) {
    this.#cache = new Cache(cacheInterval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`
    const cache = this.#cache.get<ShallowLocations>(url)
    if (cache) {
      return cache
    }

    try {
      const response = await fetch(url)

      if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
      }
      const locations = response.json()
      this.#cache.add(url, locations)
      return locations
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
