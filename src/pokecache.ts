
export type CacheEntry<T> = {
  createdAt: number,
  val: T
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>()
  #reapIntervalId: NodeJS.Timeout | undefined = undefined
  #interval: number

  constructor(interval: number) {
    this.#cache
    this.#interval = interval
    this.#startReapLoop()
  }

  add<T>(key: string, val: T): void {
    this.#cache.set(key, {
        createdAt: Date.now(),
        val: val
    })
  }

  get<T>(key: string) {
    const entry = this.#cache.get(key);
    if (entry !== undefined) {
      return entry.val as T;
    }
    return undefined;
  }

  #reap() {
    const now = Date.now()
    for (const [key, record] of this.#cache) {
      if (now - record.createdAt > this.#interval) {
        this.#cache.delete(key);
        continue
      }
      break
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval)
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId)
    this.#reapIntervalId = undefined
  }
}