
export function updateVisualizer(
  updateLayout,
  setGradeText,
  width,
  setNewGradeText,
  pos,
  num2,
  num1
) {
  updateLayout();
  setGradeText({ x: '' + width * (20.1 / 100), y: '120' });
  setNewGradeText({
    x: '' + width * (79.9 / 100),
    y: '' + (pos(num2) - pos(num1) + 120),
  });
}
