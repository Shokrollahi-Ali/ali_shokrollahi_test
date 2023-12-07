import React, { useState } from 'react';
import InputField from '../components/InputField';

const LineOverlapChecker: React.FC = () => {
  const [lineOneStart, setLineOneStart] = useState(0);
  const [lineOneEnd, setLineOneEnd] = useState(0);
  const [lineTwoStart, setLineTwoStart] = useState(0);
  const [lineTwoEnd, setLineTwoEnd] = useState(0);
  const [overlapResult, setOverlapResult] = useState<boolean | null>(null);

  const checkOverlap = () => {
    const overlap = lineOneStart <= lineTwoEnd && lineOneEnd >= lineTwoStart;
    setOverlapResult(overlap);
  };

  const renderResult = (result: boolean | null) => {
    if (result === null) return '';
    return <p>Result: {result ? 'Lines overlap' : 'Lines do not overlap'}</p>;
  };

  return (
    <div>
      <h2>Line Overlap Checker</h2>
      <div>
        <InputField
          label='Line 1 (lineOneStart, lineOneEnd):'
          type='number'
          value={lineOneStart}
          onChange={(e) => setLineOneStart(parseInt(e.target.value, 10))}
        />
        <InputField
          type='number'
          value={lineOneEnd}
          onChange={(e) => setLineOneEnd(parseInt(e.target.value, 10))}
        />
      </div>

      <div>
        <InputField
          label='Line 2 (lineTwoStart, lineTwoEnd):'
          type='number'
          value={lineTwoStart}
          onChange={(e) => setLineTwoStart(parseInt(e.target.value, 10))}
        />
        <InputField
          type='number'
          value={lineTwoEnd}
          onChange={(e) => setLineTwoEnd(parseInt(e.target.value, 10))}
        />
      </div>

      <button onClick={checkOverlap}>Check Overlap</button>
      {renderResult(overlapResult)}
    </div>
  );
};

export default LineOverlapChecker;
