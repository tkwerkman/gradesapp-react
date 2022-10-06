import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { NavBarSlopes } from '../components/navbars/nav-slope';
import { NotYetImplemented } from '../components/notimplemented/notimplemented';
import { SlopeOffsetVisualiser } from '../content/slopeoffset';

export default function Slopes() {
  const { display } = useLoaderData();
  const navigate = useNavigate();

  const DisplayHandler = () => {
    switch (display) {
      case 'offsets':
        return <SlopeOffsetVisualiser />;
      case 'grades':
        return <NotYetImplemented />;
      default:
        navigate('/slopes/offsets');
        return;
    }
  };

  return (
    <div >
      <div id='nav-buffer' className='mb-4 pt-0'>
       <NavBarSlopes />
      </div>
      <div className='info-content-container mx-2'>
        <DisplayHandler />
      </div>
    </div>
  );
}


export async function loader({ params }) {
  return { display: params.displayID };
}
