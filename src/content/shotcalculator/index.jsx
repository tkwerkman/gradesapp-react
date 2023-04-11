import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react';
import { NotYetImplemented } from '../../components/notimplemented/notimplemented';

function StakeBox({ id, name, grade, level, setGrade, setLevel, disabled }) {
  return (
    <div
      id={id}
      className='text-center m-2 p-2 border-2 border-gray-500 rounded-lg'
    >
      <h3>{name}</h3>
      <div className='block justify-center text-center'>
        <label className='ml-auto'>Grade on stake</label>
        <br />
        <input
          className='border border-gray-400'
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
          className='border border-gray-400'
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
    const toSet = Math.round((nsLevel - level + grade) * 100)/100;
    setNsGrade('' + toSet);
  };

  useEffect(() => {
    calcGrade();
  }, [grade, level, nsLevel]);

  return (
    <>
      <p>grade: {grade}</p>
      <p>level: {level} </p>
      <p>nsGrade: {nsGrade}</p>
      <p>nsLevel: {nsLevel}</p>
      <div className='flex justify-center'>
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
    </>
  );
}
