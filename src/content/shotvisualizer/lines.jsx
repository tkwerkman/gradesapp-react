import { SetLine } from '../../components/svg/line';

export function getShotLines(pos, num1, num2, grade) {
  const lines = [
    {
      name: 'Shot Level',
			set: 0,
      color: 'red',
      dashed: false,
      x1: '20%',
      y1: 203 - pos(num1),
      x2: '80%',
      y2: 203 - pos(num1),
    },
		{
			name: "Shot Level Connector",
			set: 0,
			color: 'red',
			dashed: true,
			x1: '80%',
      y1: 203 - pos(num1),
      x2: '80%',
      y2: 100 + (pos(num2) - pos(num1) + 100),
		},
    {
      name: 'Ground Tracking',
			set: 1,
      color: 'orange',
      dashed: false,
      x1: '20%',
      y1: 200,
      x2: '80.2%',
      y2: 100 + (pos(num2) - pos(num1) + 100),
    },
    {
      name: 'Ground Illustration',
			set: 2,
      color: 'green',
      dashed: false,
      x1: '15%',
      y1: 200,
      x2: '25%',
      y2: 200,
    },
    {
      name: 'Stake Bottom D',
			set: 2,
      color: 'green',
      dashed: true,
      x1: '81%',
      y1: 100 + (pos(num2) - pos(num1) + 100),
      x2: '60%',
      y2: 100 + (pos(num2) - pos(num1) + 100),
    },
    {
      name: 'Ground Tracking D',
			set: 2,
      color: 'green',
      dashed: true,
      x1: '25%',
      y1: 200,
      x2: '60%',
      y2: 200,
    },
    {
      name: 'Stake-Ground Connector',
			set: 2,
      color: 'green',
      dashed: false,
      x1: '60%',
      y1: 100 + (pos(num2) - pos(num1) + 100),
      x2: '60%',
      y2: 200,
    },
    {
      name: 'Old Grade Level',
			set: 3,
      color: 'purple',
      dashed: false,
      x1: '15%',
      y1: 200 - pos(grade),
      x2: '25%',
      y2: 200 - pos(grade),
    },
    {
      name: 'Old Grade Level D',
			set: 3,
      color: 'purple',
      dashed: true,
      x1: '15%',
      y1: 200 - pos(grade),
      x2: '12%',
      y2: 200 - pos(grade),
    },
    {
      name: 'Old Stake Grade D',
			set: 3,
      color: 'purple',
      dashed: true,
      x1: '15%',
      y1: 200,
      x2: '12%',
      y2: 200,
    },
    {
      name: 'Old Stake-Grade Connector',
			set: 3,
      color: 'purple',
      dashed: false,
      x1: '12%',
      y1: 200,
      x2: '12%',
      y2: 200 - pos(grade),
    },
    {
      name: 'Grade Level',
			set: 4,
      color: 'purple',
      dashed: false,
      x1: '75%',
      y1: 200 - pos(grade),
      x2: '85%',
      y2: 200 - pos(grade),
    },
    {
      name: 'Grade Level D',
			set: 4,
      color: 'purple',
      dashed: true,
      x1: '85%',
      y1: 200 - pos(grade),
      x2: '87%',
      y2: 200 - pos(grade),
    },
    {
      name: 'Stake Grade D',
			set: 4,
      color: 'purple',
      dashed: true,
      x1: '80%',
      y1: 100 + (pos(num2) - pos(num1) + 100),
      x2: '87%',
      y2: 100 + (pos(num2) - pos(num1) + 100),
    },
    {
      name: 'Stake-Grade Connector',
			set: 4,
      color: 'purple',
      dashed: false,
      x1: '87%',
      y1: 100 + (pos(num2) - pos(num1) + 100),
      x2: '87%',
      y2: 200 - pos(grade),
    },
  ];

  return lines;
}

export function ShotLines({ pos, num1, num2, grade, showLines }) {
  const lines = getShotLines(pos, num1, num2, grade);
  return lines.map((line) => {
		let show = true
		showLines.forEach((value, index) => {
			if (value.set == line.set && value.show == false) {
				show = false
			}
		})
		if (!show) {
			return
		}
		return <SetLine key={line.name} color={line.color} dashed={line.dashed} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />;
  });
}
