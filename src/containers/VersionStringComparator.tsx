import React, { useState } from 'react';
import InputField from '../components/InputField';

const VersionStringComparator: React.FC = () => {
  const [versionOne, setVersionOne] = useState('');
  const [versionTwo, setVersionTwo] = useState('');
  const [comparisonResult, setComparisonResult] = useState<string | null>(null);

  const compareVersions = () => {
    let result = null;
    switch (true) {
      case isNaN(+versionOne):
        result = 'versionOne is not a number';
        break;
      case isNaN(+versionTwo):
        result = 'versionTwo is not a number';
        break;
      case +versionOne > +versionTwo:
        result = 'versionOne is greater than versionTwo';
        break;
      case +versionOne < +versionTwo:
        result = 'versionTwo is greater than versionOne';
        break;
      case +versionOne === +versionTwo:
        result = 'versionOne is equal to versionTwo';
        break;
      default:
        result = 'The comparison can not be performed';
    }

    setComparisonResult(result);
  };

  const renderResult = (result: string | null) => {
    if (result === null) return '';
    return <p>Result: {comparisonResult}</p>;
  };

  return (
    <div>
      <h2>Version String Comparator</h2>

      <div>
        <InputField
          label='Version One:'
          value={versionOne}
          onChange={(e) => setVersionOne(e.target.value)}
        />
      </div>
      <div>
        <InputField
          label='Version Two:'
          value={versionTwo}
          onChange={(e) => setVersionTwo(e.target.value)}
        />
      </div>

      <button onClick={compareVersions}>Compare Versions</button>

      {renderResult(comparisonResult)}
    </div>
  );
};

export default VersionStringComparator;
