import React from 'react';
import { UpArrow, DownArrow } from '../../content/icons/Arrows';

export function Difference({ num1, num2, color }) {
  const diff = num2 - num1;
  const rnd = Math.round(diff * 100) / 100;
  let str = '' + Math.abs(rnd);
  let Ret;

  if (diff < 0) {
    str += 'm';
    Ret = (
      <div className='flex' style={{ color: color }}>
        <UpArrow />
        {str}
      </div>
    );
  } else if (diff > 0) {
    str += 'm';
    Ret = (
      <div className='flex' style={{ color: color }}>
        <DownArrow />
        {str}
      </div>
    );
  } else if (diff === 0) {
    str = Ret = (
      <div
        style={{
          textDecoration: str === '00' ? 'line-through' : 'none',
          color: color,
        }}
      >
        {str}
      </div>
    );
  }

  return Ret;
}
