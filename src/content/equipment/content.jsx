import React from "react";

const equipment = [
	{ name: "Eye Level", type: "Equipment", use: "Measures elevation change over lateral distances.", notes: "Any deficiencies or broken parts should be reported as replacement parts can be ordered." },
	{ name: "Lath Bag", type: "Equipment", use: "Holds lath while travelling around site.", notes: "Place lath in with points facing up to extend the longevity of the bag." },
	{ name: "Hatchet", type: "Equipment", use: "Used to affix lath into the ground.", notes: "Dull edge down if initially sharp." },
	{ name: "Short Tape", type: "Equipment", use: "Used to measure distances no greater than 7.5m", notes: "" },
	{ name: "Long Tape", type: "Equipment", use: "Used to measure distances no greater than 30m", notes: "Not normally required, but some grades personnel prefer to use the long tape even for short offsets." },
	{ name: "Meter Stick", type: "Created", use: "Used to measure the height from ground level of no more than 1.2m", notes: "Normally created by the person using it, made from sharpie marks on lath." },
	{ name: "Grade Rod", type: "Equipment", use: "Used to measure the height from ground level of no more than 5m", notes: "Metal, supplied to grades personnel when required." },
	{ name: "Sharpie", type: "Supplied", use: "Used to mark and write information on stakes.", notes: "Temporarily ruined if writing on wet surfaces." },
	{ name: "Ribbon", type: "Supplied", use: "Used to color-code stakes as per the color convention, as well as: creating temporary fence, marking fill heights, and others.", notes: "Keep a supply of each colour at all times." },
	{ name: "Lath", type: "Supplied", use: "Used to create a station/stake, as well as for meter sticks.", notes: "" },
]

export default function equipmentInfo() {
	return equipment
}