import React, { useEffect } from 'react';
import {
  createCache,
  set,
  get,
} from './helperFunctions/geoDistributedLRUCache';
import LineOverlapChecker from './containers/LineOverlapChecker';
import VersionStringComparator from './containers/VersionStringComparator';

const App: React.FC = () => {
  const cache = createCache<string>(5000);

  set(cache, 'Hello, Cache!');

  const initialValue = get(cache);
  console.log('Initial Value (expiration time is 5 seconds):', initialValue);

  useEffect(() => {
    const timeoutWithinExpiration = setTimeout(() => {
      const withinExpiration = get(cache);
      console.log('After 3 seconds (Within Expiration):', withinExpiration);
    }, 3000);

    return () => clearTimeout(timeoutWithinExpiration);
  }, [cache]);

  useEffect(() => {
    const timeoutAfterExpiration = setTimeout(() => {
      const withinExpiration = get(cache);
      console.log('After 7 seconds (After Expiration):', withinExpiration);
    }, 7000);

    return () => clearTimeout(timeoutAfterExpiration);
  }, [cache]);

  return (
    <div>
      <LineOverlapChecker />
      <VersionStringComparator />
      <h1>Geo Distributed LRU Cache Example</h1>
      <p>Check the console for log output.</p>
    </div>
  );
};

export default App;
