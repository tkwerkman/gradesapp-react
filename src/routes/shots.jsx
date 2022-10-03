import React, { useState } from "react";
import { Difference } from "../components/shot_difference";
import { shotDrawingPositionConverter } from "../functions/shotDrawingPosition";

export default function Shots() {

	const [num1, setNum1] = useState(1)
	const [num2, setNum2] = useState(1)
	const bounds = { min: 0, max: 5, conv: 500 } // meter range for visuals

	const pos = (num) => {return shotDrawingPositionConverter(bounds, num)}

	const handleOne = () => {setNum1(document.getElementById("num1Range").value)}
	const handleTwo = () => {setNum2(document.getElementById("num2Range").value)}

	return (

		<div className="mt-4 mx-1">
			<div>
				<label>Shot from: {num1}</label>
				<div className="relative pt-1">
					<input
						type="range"
						value={num1}
						className=" form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none touch-none"
						id="num1Range"
						min="0"
						max="2"
						step="0.01"
						onChange={handleOne}
					/>
				</div>
				<label>Shot to: {num2}</label>
				<div className="relative pt-1">
					<input
						type="range"
						value={num2}
						className=" form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none touch-none"
						id="num2Range"
						min="0"
						max="2"
						step="0.01"
						onChange={handleTwo}
					/>
				</div>
			</div>


			<div className="shot-stick-container">
				<svg className="absolute top-0 left-0 border-[1px] border-red-500" height="100%" width="100%">
					<line style={{ stroke: "red", strokeWidth: 2 }} x1="20%" y1={pos(num1)} x2="80%" y2={pos(num2)} />
					<line style={{ stroke: "green", strokeWidth: 2 }} x1="20%" y1={pos(num1)} x2="80%" y2={pos(num1)} />

					<line style={{ stroke: "blue", strokeDasharray: "4", strokeWidth: "2"}} x1="80%" y1={pos(num2)} x2="85%" y2={pos(num2)} />
					<line style={{ stroke: "blue", strokeDasharray: "4", strokeWidth: "2"}} x1="80%" y1={pos(num1)} x2="85%" y2={pos(num1)} />

					<line style={{ stroke: "blue", strokeWidth: 2 }} x1="85%" y1={pos(num2)} x2="85%" y2={pos(num1)} />
				</svg>

				<div id="diffText" className="absolute" style={{top: ((pos(num2) + pos(num1))/2)-10, left: "87%"}}><Difference num1={num1} num2={num2} /></div>

				<div id="shot1" className="shot-stick" style={{ left: "20%", top: `${pos(num1)}px` }}></div>
				<div id="shot2" className="shot-stick" style={{ left: "80%", top: `${pos(num2)}px` }}></div>
			</div>
		</div>


	)
}