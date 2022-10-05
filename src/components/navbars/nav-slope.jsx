import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import PillBar from '../pillbar';

export function NavBarSlopes() {
  const navigate = useNavigate();
  const textArray = ['Offsets', 'Grades'];

  const handleDisplay = (e) => {
    const route = e.target.innerText.toLowerCase();
    navigate(`/slopes/${route}`);
  };

  return <PillBar textArray={textArray} func={handleDisplay} />;
}
