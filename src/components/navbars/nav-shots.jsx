import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import PillBar from '../pillbar';

export function NavBarShots() {
  const navigate = useNavigate();
  const textArray = ['Visualizer', 'Calculator'];

  const handleDisplay = (e) => {
    const route = e.target.innerText.toLowerCase();
    navigate(`/shots/${route}`);
  };

  return <PillBar textArray={textArray} func={handleDisplay} />;
}
