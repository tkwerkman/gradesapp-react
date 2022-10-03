import React from "react";
import stationsInfo from "./content";


export function Display() {
	const info = stationsInfo()
	return info.map((item) => {
		const style = { color: item.color.toLowerCase() }
		return (
			<div key={item.title} className="info-content-item">
				<h2 style={style}>{item.abb}</h2>
				<h3>{item.title}</h3>
				<hr />
				<p>{item.content}</p>
			</div>
		)
	})
}

