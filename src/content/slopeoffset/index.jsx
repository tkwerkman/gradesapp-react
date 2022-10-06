import React, { useEffect, useState } from 'react';
import { SlopeOffsetRanges } from './ranges';
import { SlopeOffsetVisualizer } from './visualizer'


export function SlopeOffsetVisualiser() {
  const [rise, setRise] = useState(1);
  const [run, setRun] = useState(1);
  const [height, setHeight] = useState(1);

  const [points, setPoints] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const inc = 50;

  function calculatePoints() {
    const newPoints = [
      { x: 10, y: 100 },
      { x: 10 + inc + (run * inc), y: 100 + inc + (rise * inc) },
    ];

    return newPoints;
  }

  useEffect(() => {
    setPoints(calculatePoints());
  }, [rise, run]);

	const pos = (num) => {
    return (num)
  };

  return (
    <>
			<SlopeOffsetRanges run={run} rise={rise} height={height} setRun={setRun} setHeight={setHeight} />

      <div id='slopeDiv' className='slope-vis-container'>
       <SlopeOffsetVisualizer pos={pos} points={points} height={height} />
      </div>
    </>
  );
}
