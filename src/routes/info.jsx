import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { Display as EquipmentDisplay } from "../content/equipment/index";
import { Display as FaqDisplay } from "../content/faq/index";
import { Display as StationsDisplay } from "../content/stations/index"


export default function Info() {

	const { display } = useLoaderData()
	const navigate = useNavigate()

	const handleDisplay = (e) => {
		const route = e.target.innerText.toLowerCase()
		navigate(`/info/${route}`)
	}

	const DisplayHandler = () => {
		switch (display) {
			case "stations":
				return <StationsDisplay />
			case "equipment":
				return <EquipmentDisplay />
			case "faq":
				return <FaqDisplay />
			default:
				navigate("/info/stations")
				return
		}
	}

	return (
		<div>
			<div id="topbar" className="navbar-main mb-4 pt-0">
				<div className="navbar-icon" onClick={handleDisplay}><div className="topbar-text">Stations</div></div>
				<div className="navbar-icon" onClick={handleDisplay}><div className="topbar-text">Equipment</div></div>
				<div className="navbar-icon" onClick={handleDisplay}><div className="topbar-text">FAQ</div></div>
			</div>
			<div className="info-content-container">
				<DisplayHandler />
			</div>
		</div>
	)
}

export async function loader({ params }) {
	return ({ display: params.displayID })
}