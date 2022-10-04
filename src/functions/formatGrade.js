export function formatGrade(newGrade) {
  const str = newGrade > 0 ? 'F ' : 'C ';
  const rnd = Math.round(newGrade * 100) / 100;
  return `${str}${'' + Math.abs(rnd)}`;
}
