import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react';
import { NotYetImplemented } from '../../components/notimplemented/notimplemented';

function StakeBox({ id, name, grade, level, setGrade, setLevel, disabled }) {
  return (
    <div
      id={id}
      className='text-center m-2 p-2 border-2 border-gray-500 rounded-lg w-40'
    >
      <h3>{name}</h3>
      <div className='block justify-center text-center'>
        <label>Grade</label>
        <br />
        <input
          className='border border-gray-400 w-20'
					size='10'
          type='number'
          onChange={(e) => setGrade(e.target.value)}
          disabled={disabled}
          placeholder={grade}
        />
      </div>
      <div className='block justify-center text-center'>
        <label className='ml-auto'>Level height</label>
        <br />
        <input
          className='border border-gray-400 w-20'
					size='10'
          type='number'
          onChange={(e) => setLevel(e.target.value)}
        />
      </div>
    </div>
  );
}

export default function ShotCalculator() {
  const [grade, setGrade] = useState(0);
  const [level, setLevel] = useState(0);
  const [nsGrade, setNsGrade] = useState(0);
  const [nsLevel, setNsLevel] = useState(0);

  const calcGrade = () => {
    const newGrade =(Number(nsLevel) - Number(level)) + Number(grade);
		const toSet = Math.round(newGrade*100) / 100
    setNsGrade('' + toSet);
  };

  useEffect(() => {
    calcGrade();
  }, [grade, level, nsLevel]);

  return (
    <div className='m-2'>
			<p className='text-sm italic'>
				Ensure all measurements are in the same units. Positive numbers mean fill, negative mean cut.
			</p>
      <div className='flex'>
        <StakeBox
          id='oldstick'
          name='Old Stake'
          grade={grade}
          level={level}
          setGrade={setGrade}
          setLevel={setLevel}
        />
        <StakeBox
          id='newstick'
          name='New Stake'
          grade={nsGrade}
          level={nsLevel}
          disabled={true}
          setGrade={setNsGrade}
          setLevel={setNsLevel}
        />
      </div>
    </div>
  );
}
