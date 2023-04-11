import { Difference } from '../../components/shot_difference';

export function ShotDiffText({ pos, num1, num2, grade, showLines }) {
  return (
    <>
      <div
        id='groundDiffText'
				hidden={showLines[2].show?false:true}
        className='absolute text-sm'
        style={{
          top: (100 + (pos(num2) - pos(num1) + 100) + 200) / 2 - 10,
          left: '61%',
        }}
      >
        <Difference color='green' num1={num1} num2={num2} />
      </div>

			<div
				id='oldGradeDiffText'
				hidden={showLines[3].show?false:true}
				className='absolute text-sm'
				style={{
					top:
						(200  + (200 - pos(grade))) / 2 - 10,
					left: '5%',
				}}
			>
				<Difference color='purple' num1={grade} num2={0} />
			</div>

      <div
        id='gradeDiffText'
				hidden={showLines[4].show?false:true}
        className='absolute text-sm'
        style={{
          top:
            (100 + (pos(num2) - pos(num1) + 100) + (200 - pos(grade))) / 2 - 10,
          left: '88%',
        }}
      >
        <Difference color='purple' num1={grade} num2={num1 - num2} />
      </div>
    </>
  );
}
