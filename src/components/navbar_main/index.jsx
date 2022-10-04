import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css"
export function NavBar() {

	const navigate = useNavigate()
	const navRoutes = {
		Home: "/",
		Shots: "/shots",
		Slopes: "/slopes",
		Info: "/info/stations"
	}

	const handleDisplay = (e) => {
		const route = navRoutes[e.target.innerText]
		navigate(route)
	}

	return (
		<div className="navbar-main">
			<div className="navbar-icon" onClick={handleDisplay}><div className="topbar-text">Home</div></div>
			<div className="navbar-icon" onClick={handleDisplay}><div className="topbar-text">Shots</div></div>
			<div className="navbar-icon" onClick={handleDisplay}><div className="topbar-text">Slopes</div></div>
			<div className="navbar-icon" onClick={handleDisplay}><div className="topbar-text">Info</div></div>
		</div>
	)
}