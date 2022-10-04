import React, { useState } from 'react';
import { Difference } from '../components/shot_difference';
import { shotDrawingPositionConverter } from '../functions/shotDrawingPosition';
import { formatGrade } from '../functions/formatGrade';
import { calcNewGrade } from '../functions/calcNewGrade';
import { LabelledRange } from '../components/labelledrange';
import { ShotLines } from '../content/shots/display';

export default function Shots() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [grade, setGrade] = useState(0);
  const bounds = { min: 0, max: 5, conv: 500 }; // meter range for visuals

  const pos = (num) => {
    return shotDrawingPositionConverter(bounds, num);
  };

  const handleOne = () => {
    setNum1(document.getElementById('num1Range').value);
  };
  const handleTwo = () => {
    setNum2(document.getElementById('num2Range').value);
  };

  const handleGrade = () => {
    setGrade(document.getElementById('gradeRange').value);
  };


  return (
    <div className='mt-4 mx-1'>
      <div>
        <LabelledRange
          id='num1Range'
          label={`Shot (Old Stick): ${num1}`}
          value={num1}
          func={handleOne}
        />
        <LabelledRange
          id='num2Range'
          label={`Shot (New Stick): ${num2}`}
          value={num2}
          func={handleTwo}
        />
        <LabelledRange
          id='gradeRange'
          label={`Grade (Old Stick): ${grade}`}
          value={grade}
          func={handleGrade}
        />
        <label>
          Grade (New Stick): {formatGrade(calcNewGrade(num1, num2, grade))}
        </label>
      </div>

      <div className='shot-stick-container'>
        <svg
          className='absolute top-0 left-0 border-[1px] border-red-500'
          height='100%'
          width='100%'
        >
					<ShotLines pos={pos} num1={num1} num2={num2} grade={grade} />

				</svg>

        <div
          id='groundDiffText'
          className='absolute text-sm'
          style={{
            top: (100 + (pos(num2) - pos(num1) + 100) + 200) / 2 - 10,
            left: '61%',
          }}
        >
          <Difference color='green' num1={num1} num2={num2} />
        </div>

        <div
          id='gradeDiffText'
          className='absolute text-sm'
          style={{
            top: (100 + (pos(num2) - pos(grade)) + 200) / 2 - 10,
            left: '82%',
          }}
        >
          <Difference color='purple' num1={grade} num2={num1 - num2} />
        </div>

        <div
          id='shot1'
          className='shot-stick'
          style={{ left: '20%', top: `100px` }}
        />
        <div
          id='shot2'
          className='shot-stick'
          style={{ left: '80%', top: `${pos(num2) - pos(num1) + 100}px` }}
        />
      </div>
    </div>
  );
}
