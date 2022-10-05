export function SetLine({ color, dashed, x1, y1, x2, y2 }) {
  return (
    <line
      style={{
        stroke: color,
        strokeWidth: 2,
        strokeDasharray: dashed ? 8 : false,
      }}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
    />
  );
}
