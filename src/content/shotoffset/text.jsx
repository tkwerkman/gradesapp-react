import { formatGrade } from "../../functions/formatGrade";

export function ShotGradeText({gradeText, newGradeText, grade, newGrade, pos, num1, num2}) {

  return (
    <>
      <text
        id='gradeText'
        className='text-xs'
        x={gradeText.x}
        y={gradeText.y}
        transform={`rotate(90 ${gradeText.x} ${gradeText.y})`}
      >
        {formatGrade(grade)}
      </text>

      <text
        id='newGradeText'
        className='text-xs'
        x={newGradeText.x}
        y={newGradeText.y}
        transform={`rotate(90 ${newGradeText.x} ${newGradeText.y})`}
      >
        {formatGrade(newGrade)}
      </text>

			<text
				id='levelText'
				className="text-xs"
				x={'60%'}
				y={200 - pos(num1)}
			>

			</text>
    </>
  );
}
