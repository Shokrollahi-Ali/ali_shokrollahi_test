import React from 'react';
import LineOverlapChecker from './containers/LineOverlapChecker';
import VersionStringComparator from './containers/VersionStringComparator';

const App: React.FC = () => {
  return (
    <div>
      <LineOverlapChecker />
      <VersionStringComparator />
    </div>
  );
};

export default App;
