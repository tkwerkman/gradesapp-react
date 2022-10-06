import { SetLine } from '../../components/svg/line';

export function SlopeOffsetLines({ pos, points }) {
  return (
    <>
      <SetLine
        color='black'
        dashed={false}
        x1={pos(points[0].x)}
        y1={pos(points[0].y)}
        x2={pos(points[1].x)}
        y2={pos(points[1].y)}
      />
      <SetLine
        color='blue'
        dashed={true}
        x1={pos(points[0].x)}
        y1={pos(points[0].y)}
        x2={pos(points[0].x)}
        y2={pos(points[1].y)}
      />
      <SetLine
        color='red'
        dashed={true}
        x1={pos(points[0].x)}
        y1={pos(points[1].y)}
        x2={pos(points[1].x)}
        y2={pos(points[1].y)}
      />
    </>
  );
}
