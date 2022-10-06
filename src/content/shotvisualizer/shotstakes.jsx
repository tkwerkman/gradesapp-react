export function ShotStakes({pos, num1, num2}) {
  return (
    <>
      <rect
        x='20%'
        y='100px'
        width='14px'
        height='100px'
        strokeWidth={2}
        stroke='brown'
        fillOpacity='0%'
      />
      <rect
        x='80%'
        y={`${pos(num2) - pos(num1) + 100}px`}
        width='14px'
        height='100px'
        strokeWidth={2}
        stroke='brown'
        fillOpacity='0%'
      />
    </>
  );
}
