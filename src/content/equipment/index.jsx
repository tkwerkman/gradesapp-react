import React from "react";
import equipmentInfo from "./content";

export function Display() {
	const info = equipmentInfo()
	return info.map((item) => {
		return (
			<div key={item.name} className="info-content-item">
				<h2>{item.name}</h2>
				<h3>Type: {item.type}</h3>
				<hr />
				<p>{item.use}</p>
				<p>{item.notes}</p>
			</div>
		)
	})

}