import React from 'react';
import { UpArrow, DownArrow } from '../../content/icons/Arrows';
import { formatGradeWithoutLetters } from '../../functions/formatGrade';

export function Difference({ num1, num2, color }) {
  const diff = num2 - num1;
  let str = formatGradeWithoutLetters(diff)
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
          textDecoration: 'line-through',
          color: color,
        }}
      >
        {'00'}
      </div>
    );
  }

  return Ret;
}
