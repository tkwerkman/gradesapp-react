import { formatGrade } from "../../functions/formatGrade";

export function ShotGradeText({gradeText, newGradeText, grade, newGrade, pos, num1, num2}) {

  return (
    <>
      <text
        id='gradeText'
        className='text-xs'
				style={{textDecoration: newGrade == 0 ? 'line-through' : 'none'}}
        x={gradeText.x}
        y={gradeText.y}
        transform={`rotate(90 ${gradeText.x} ${gradeText.y})`}
      >
        {formatGrade(grade)}
      </text>

      <text
        id='newGradeText'
        className='text-xs'
				style={{textDecoration: newGrade == 0 ? 'line-through' : 'none'}}
        x={newGradeText.x}
        y={newGradeText.y}
        transform={`rotate(90 ${newGradeText.x} ${newGradeText.y})`}
      >
        {formatGrade(newGrade)}
      </text>

    </>
  );
}
