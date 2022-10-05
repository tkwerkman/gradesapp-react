import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import PillBar from '../../components/pillbar';

export function NavBarRoot() {
  const navigate = useNavigate();
  const navRoutes = {
    Home: '/',
    Shots: '/shots/visualizer',
    Slopes: '/slopes/offsets',
    Info: '/info/stations',
  };

  const textArray = ['Home', 'Shots', 'Slopes', 'Info'];
  const handleDisplay = (e) => {
    const route = navRoutes[e.target.innerText];
    navigate(route);
  };

  return <PillBar textArray={textArray} func={handleDisplay} />;
}
