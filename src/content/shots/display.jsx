import { SetLine } from "../../components/svg/line"
import getShotLines from "./lines"

export function ShotLines({pos, num1, num2, grade}) {
	const lines = getShotLines(pos, num1, num2, grade)
	return lines.map((line) => {
		return(
			<SetLine
				color={line.color}
				dashed={line.dashed}
				x1={line.x1}
				y1={line.y1}
				x2={line.x2}
				y2={line.y2}
			/>
		)
	})
}