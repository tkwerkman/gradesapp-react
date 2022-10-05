import React, { useEffect, useState } from 'react';
import { LabelledRange } from '../../components/labelledrange';
import { SetLine } from '../../components/svg/line';
import { shotDrawingPositionConverter } from '../../functions/shotDrawingPosition';


export function SlopeBaseVisualiser() {
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
      <div className='flex w-full'>
        <div className='flex-grow px-1'>
          <LabelledRange
            id='runrange'
            label={`Slope: ${run}:${rise}`}
            value={run}
            set={{ min: '1', max: '12', step: '0.5' }}
            func={() => {
              setRun(document.getElementById('runrange').value);
            }}
          />
        </div>
				<div className=''>
					{" "}
				</div>
        <div className='flex-shrink px-1'>
          <LabelledRange
            id='heightrange'
            label={`Height: ${height}`}
            value={height}
            set={{ min: '1', max: '10', step: '0.01' }}
            func={() => {
              setHeight(document.getElementById('heightrange').value);
            }}
          />
        </div>
      </div>

      <div id='slopeDiv' className='slope-vis-container'>
        <svg
          id='shotSVG'
          className='absolute top-0 left-0'
          height='100%'
          width='100%'
        >
          <SetLine
            color='black'
            dashed={false}
            x1={pos(points[0].x)}
            y1={pos(points[0].y)}
            x2={pos(points[1].x)}
            y2={pos(points[1].y)}
          />
          <SetLine
            color='blue'
            dashed={true}
            x1={pos(points[0].x)}
            y1={pos(points[0].y)}
            x2={pos(points[0].x)}
            y2={pos(points[1].y)}
          />
          <SetLine
            color='red'
            dashed={true}
            x1={pos(points[0].x)}
            y1={pos(points[1].y)}
            x2={pos(points[1].x)}
            y2={pos(points[1].y)}
          />
          <text id='heightText' className='text-sm' x={pos(points[0].x + 5)} y={((pos(points[0].y)+pos(points[1].y))/2)+10}>
            {height + 'm'}
          </text>
          <text
            id='baseText'
            className='text-sm'
            x={((pos(points[1].x) + pos(points[0].x)) / 2)-25}
            y={pos(points[1].y + 20)}
          >
            {Math.round((points[1].x - points[0].x) * height) / 100 + 'm'}
          </text>
        </svg>
      </div>
    </>
  );
}
