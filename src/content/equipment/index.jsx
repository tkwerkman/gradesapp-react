import React from 'react';
import equipmentInfo from './content';

export function Display() {
  const info = equipmentInfo();
  return info.map((item) => {
    return (
      <div key={item.name} className='info-content-item align-bottom p-4'>
        <div className='flex justify-around align-middle m-0 p-0'>
          <div className='flex font-semibold align-middle pt-1 text-4xl mt-auto p-1 pb-0'>{item.name}</div>
          <div className='flex font-light align-bottom pt-1 mt-auto p-1 pb-0'>Type: {item.type}</div>
        </div>

        <hr className='mt-0'/>
        <p>{item.use}</p>
        <p>{item.notes}</p>
      </div>
    );
  });
}
