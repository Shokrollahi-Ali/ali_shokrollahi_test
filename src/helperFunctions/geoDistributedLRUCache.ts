interface CacheValue<T> {
  value: T;
  timestamp: number;
}

interface GeoDistributedLRUCache<T> {
  cache: CacheValue<T> | undefined;
  expirationTime: number;
}

const createCache = <T>(expirationTime: number): GeoDistributedLRUCache<T> => ({
  cache: undefined,
  expirationTime,
});

const set = <T>(cache: GeoDistributedLRUCache<T>, value: T): void => {
  cache.cache = { value, timestamp: Date.now() };
};

const get = <T>(cache: GeoDistributedLRUCache<T>): T | undefined => {
  const cacheEntry = cache.cache;

  if (cacheEntry && Date.now() - cacheEntry.timestamp <= cache.expirationTime) {
    return cacheEntry.value;
  }

  return undefined;
};

export { createCache, get, set };
