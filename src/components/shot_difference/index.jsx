import React from 'react';

export function Difference({ num1, num2, color }) {

  const diff = (num2 - num1);
	const rnd = Math.round((diff*100))/100
  let str = '' + Math.abs(rnd);

  if (diff < 0) {
    str += 'm +';
  } else if (diff > 0) {
    str += 'm -';
  } else if (diff === 0) {
    str = '00';
  }

  return (
    <span style={{ textDecoration: str === '00' ? 'line-through' : 'none', color: color }}>
      {str}
    </span>
  );
}
