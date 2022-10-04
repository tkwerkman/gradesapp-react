import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import PillBar from '../pillbar';

export function NavBarInfo() {
  const navigate = useNavigate();
  const textArray = ['Stations', 'Equipment', 'FAQ'];

  const handleDisplay = (e) => {
    const route = e.target.innerText.toLowerCase();
    navigate(`/info/${route}`);
  };

  return <PillBar textArray={textArray} func={handleDisplay} />;
}
