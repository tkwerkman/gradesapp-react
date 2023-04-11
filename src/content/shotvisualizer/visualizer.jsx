import { ShotGradeText } from './text';
import { ShotDiffText } from './difftext';
import { ShotLines } from './lines';
import { ShotStakes } from './shotstakes';

export function ShotVisualizer({
  pos,
  num1,
  num2,
  grade,
  newGrade,
  gradeText,
  newGradeText,
	showLines,
}) {
  return (
    <>
      <svg
        id='shotSVG'
        className='absolute top-0 left-0'
        height='100%'
        width='100%'
      >
        <ShotLines pos={pos} num1={num1} num2={num2} grade={grade} showLines={showLines}/>
				<ShotStakes pos={pos} num1={num1} num2={num2} />
        <ShotGradeText
          gradeText={gradeText}
          newGradeText={newGradeText}
          grade={grade}
          newGrade={newGrade}
          pos={pos}
          num1={num1}
          num2={num2}
        />
      </svg>

      <ShotDiffText pos={pos} num1={num1} num2={num2} grade={grade} showLines={showLines} />

      {/* <div
        id='shot1'
        className='shot-stick'
        style={{ left: '20%', top: `100px` }}
      />
      <div
        id='shot2'
        className='shot-stick'
        style={{ left: '80%', top: `${pos(num2) - pos(num1) + 100}px` }}
      /> */}
    </>
  );
}
