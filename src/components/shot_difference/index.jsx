import React from "react"

export function Difference({num1, num2}) {

	const diff = (Math.floor((num2 - num1) * 100) / 100)
	let str = '' + Math.abs(diff)

	if (diff < 0) {
		str += "m higher"
	} else if (diff > 0) {
		str += "m lower"
	} else if (diff === 0) {
		str = "00"
	}

	return <span style={{textDecoration: (str==="00")?"line-through":"none"}}>{str}</span>
}