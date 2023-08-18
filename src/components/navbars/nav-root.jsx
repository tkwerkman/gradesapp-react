import React from 'react';
import { useNavigate } from 'react-router-dom';
import PillBar, { ExpandablePill, ExpandablePillChild, Pill } from '../../components/pillbar';

export function NavBarRoot() {
  const navigate = useNavigate();
  const navRoutes = {
    Home: '/',
    Visualizer: '/shots/visualizer',
    Calculator: '/shots/calculator',
    Offsets: '/slopes/offsets',
    Grades: '/slopes/grades',
    Stations: '/info/stations',
    Equipment: '/info/equipment',
    FAQ: '/info/faq',
  };

  const handleDisplay = (e) => {
    const route = navRoutes[e.target.innerText];
    navigate(route);
  };

  const Main = () => {
    return (
      <ExpandablePill text='Main'>
        <ExpandablePillChild text='Home' func={handleDisplay} />
      </ExpandablePill>
    );
  };

  const Shots = () => {
    return (
      <ExpandablePill text='Shots'>
        <ExpandablePillChild text='Visualizer' func={handleDisplay} />
        <ExpandablePillChild text='Calculator' func={handleDisplay} />
      </ExpandablePill>
    );
  };

  const Slopes = () => {
    return (
      <ExpandablePill text='Slopes'>
        <ExpandablePillChild text='Offsets' func={handleDisplay} />
        <ExpandablePillChild text='Grades' func={handleDisplay} />
      </ExpandablePill>
    );
  };
  const Info = () => {
    return (
      <ExpandablePill text='Info'>
        <ExpandablePillChild text='Stations' func={handleDisplay} />
        <ExpandablePillChild text='Equipment' func={handleDisplay} />
        <ExpandablePillChild text='FAQ' func={handleDisplay} />
      </ExpandablePill>
    );
  };

  return (
    <PillBar>
			<Main />
      <Shots />
			<Slopes />
			{/* <Info /> */}
    </PillBar>
  );
}
