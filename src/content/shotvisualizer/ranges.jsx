import { formatGrade, formatGradeWithoutLetters } from '../../functions/formatGrade';
import { LabelledRange } from '../../components/labelledrange';

export function ShotRanges({ num1, num2, grade, newGrade, handleChange }) {
  return (
    <div>
      <LabelledRange
        id='num1Range'
        label={'Shot (Old Stick): '}
				valueLabel={'' + formatGradeWithoutLetters(num1)}
        value={num1}
				set={{min: "0", max: "2", step: "0.01"}}
        func={() => handleChange('num1')}
      />
      <LabelledRange
        id='num2Range'
        label={'Shot (New Stick): '}
				valueLabel={'' + formatGradeWithoutLetters(num2)}
        value={num2}
				set={{min: "0", max: "2", step: "0.01"}}
        func={() => handleChange('num2')}
      />
      <LabelledRange
        id='gradeRange'
        label={`Grade (Old Stick): `}
				valueLabel={formatGrade(grade)}
        value={grade}
				set={{min: "-2", max: "2", step: "0.01"}}
        func={() => handleChange('grade')}
      />
      <label>
				{'Grade (New Stick): '}
				<span style={{textDecoration: newGrade == 0 ? 'line-through':'none'}}>
					{formatGrade(newGrade)}
				</span>
			</label>
    </div>
  );
}
