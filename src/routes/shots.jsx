import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { NavBarShots } from "../components/navbars/nav-shots";
import ShotCalculator from "../content/shotcalculator";
import OffsetVisualizer from "../content/shotvisualizer";

export default function Shots() {
  const { display } = useLoaderData();
  const navigate = useNavigate();

  const DisplayHandler = () => {
    switch (display) {
      case 'visualizer':
        return <OffsetVisualizer />;
      case 'calculator':
        return <ShotCalculator />;
      default:
        navigate('/shots/visualizer');
        return;
    }
  };

  return (
    <div >
      <div id='nav-buffer' className='mb-4 pt-0'>
       <NavBarShots />
      </div>
      <div className='w-full'>
        <DisplayHandler />
      </div>
    </div>
  );
}

export async function loader({ params }) {
  return { display: params.displayID };
}