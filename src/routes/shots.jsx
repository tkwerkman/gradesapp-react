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
					{/* Level line */} <line style={{ stroke: "red", strokeWidth: 2 }} x1="20%" y1={200 - pos(num1)} x2="80%" y2={200 - pos(num1)} />
					{/* Ground tracking line */} <line style={{ stroke: "orange", strokeWidth: 2 }} x1="25%" y1={200} x2="80.2%" y2={100 + (pos(num2) - pos(num1) + 98)} /> 

					{/* Ground illustration line */}<line style={{ stroke: "green", strokeWidth: 2}} x1="15%" y1={200} x2="25%" y2={200} />

					{/* Top dotted line */} <line style={{ stroke: "blue", strokeDasharray: "8", strokeWidth: "2"}} x1="81%" y1={100 + (pos(num2) - pos(num1) + 100)} x2="85%" y2={100 + (pos(num2) - pos(num1) + 100)} />
					{/* Bottom dotted line */}<line style={{ stroke: "blue", strokeDasharray: "8", strokeWidth: "2"}} x1="25%" y1={200} x2="85%" y2={200} />

					{/* Vertical connector (dotted lines) */}<line style={{ stroke: "blue", strokeWidth: 2 }} x1="85%" y1={100 + (pos(num2) - pos(num1) + 100)} x2="85%" y2={200} />
				</svg>

				<div id="diffText" className="absolute" style={{top: ((100 + (pos(num2) - pos(num1) + 100) + 200)/2)-10, left: "87%"}}><Difference num1={num1} num2={num2} /></div>



				<div id="shot1" className="shot-stick" style={{ left: "20%", top: `100px` }} />
				<div id="shot2" className="shot-stick" style={{ left: "80%", top: `${pos(num2) - pos(num1) + 100}px` }} />

			</div>
		</div>


	)
}