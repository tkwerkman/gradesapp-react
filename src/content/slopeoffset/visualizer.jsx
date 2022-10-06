import { SlopeOffsetLines } from "./lines";
export function SlopeOffsetVisualizer({pos, points, height}) {
  return (
    <svg
      id='shotSVG'
      className='absolute top-0 left-0'
      height='100%'
      width='100%'
    >
      <SlopeOffsetLines pos={pos} points={points} />
      <text
        id='heightText'
        className='text-sm'
        x={pos(points[0].x + 5)}
        y={(pos(points[0].y) + pos(points[1].y)) / 2 + 10}
      >
        {height + 'm'}
      </text>
      <text
        id='baseText'
        className='text-sm'
        x={(pos(points[1].x) + pos(points[0].x)) / 2 - 25}
        y={pos(points[1].y + 20)}
      >
        {Math.round((points[1].x - points[0].x) * height) / 100 + 'm'}
      </text>
    </svg>
  );
}
