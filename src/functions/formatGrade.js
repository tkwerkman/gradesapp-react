export function formatGrade(newGrade) {
	if (newGrade == 0) {
		return '00'
	}
  const str = newGrade > 0 ? 'F ' : 'C ';
  const rnd = Math.abs(Math.round(newGrade * 100) / 100);

	if (rnd.toString().includes('.')) {
		if (rnd.toString().split(".")[1].length == 1) {
			return `${str}${'' + rnd + 0}`;
		}
	}

	return `${str}${'' + rnd}`;
}

export function formatGradeWithoutLetters(newGrade) {
	const rnd = Math.abs(Math.round(newGrade * 100) / 100);
 
	if (newGrade == 1 || newGrade == 0) {
		return `${'' + newGrade + ".00"}`
	}

	if (rnd.toString().includes('.')) {
		if (rnd.toString().split(".")[1].length == 1) {
			return `${'' + rnd + 0}`;
		}
	}
	return rnd;
}
