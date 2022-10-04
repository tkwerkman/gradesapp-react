import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { Display as EquipmentDisplay } from '../content/equipment/index';
import { Display as FaqDisplay } from '../content/faq/index';
import { NavBarInfo } from '../components/navbars/nav-info';
import { Display as StationsDisplay } from '../content/stations/index';

export default function Info() {
  const { display } = useLoaderData();
  const navigate = useNavigate();

  const DisplayHandler = () => {
    switch (display) {
      case 'stations':
        return <StationsDisplay />;
      case 'equipment':
        return <EquipmentDisplay />;
      case 'faq':
        return <FaqDisplay />;
      default:
        navigate('/info/stations');
        return;
    }
  };

  return (
    <div>
      <div id='nav-buffer' className='mb-4 pt-0'>
        <NavBarInfo />
      </div>
      <div className='info-content-container'>
        <DisplayHandler />
      </div>
    </div>
  );
}

export async function loader({ params }) {
  return { display: params.displayID };
}
