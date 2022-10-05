import React, { useEffect, useRef, useState } from 'react';

import { shotDrawingPositionConverter } from '../../functions/shotDrawingPosition';
import { calcNewGrade } from '../../functions/calcNewGrade';
import { updateVisualizer } from '../../functions/updateVisualizer';

import { ShotVisualizer } from './visualizer';
import { ShotRanges } from './ranges';

export default function OffsetVisualizer() {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [grade, setGrade] = useState(0);

  const [gradeText, setGradeText] = useState({ x: '0', y: '0' });
  const [newGradeText, setNewGradeText] = useState({ x: '0', y: '0' });

  const newGrade = calcNewGrade(num1, num2, grade);
  const bounds = { min: 0, max: 5, conv: 500 }; // meter range for visuals

  function updateLayout() {
    function setLayout() {
      const refW = ref.current.offsetWidth || 0;
      const refH = ref.current.offsetHeight || 0;
      setWidth(refW);
      setHeight(refH);
    }
    return setLayout();
  }

  useEffect(() => {
    if (window.location.pathname !== '/shots/visualizer') {
      return;
    }

    function resizeEvent(ev) {
      updateLayout();
    }
    return window.addEventListener('resize', resizeEvent);
  });

  useEffect(() => {
    updateVisualizer(
      updateLayout,
      setGradeText,
      width,
      setNewGradeText,
      pos,
      num2,
      num1
    );
  }, [width, height, num1, num2, grade]);

  const pos = (num) => {
    return shotDrawingPositionConverter(bounds, num);
  };

  const handleChange = (item) => {
    switch (item) {
      case 'num1':
        setNum1(document.getElementById('num1Range').value);

      case 'num2':
        setNum2(document.getElementById('num2Range').value);

      case 'grade':
        setGrade(document.getElementById('gradeRange').value);

      default:
        return;
    }
  };

  return (
    <div className='mt-4 mx-1'>
      <ShotRanges
        num1={num1}
        num2={num2}
        grade={grade}
        newGrade={newGrade}
        handleChange={handleChange}
      />

      <div ref={ref} id='shotDiv' className='shot-stick-container'>
        <ShotVisualizer
          pos={pos}
          num1={num1}
          num2={num2}
          grade={grade}
          newGrade={newGrade}
          gradeText={gradeText}
          newGradeText={newGradeText}
        />
      </div>
    </div>
  );
}