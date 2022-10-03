

const stations = [
	
	{
		title: "Front of Lot",
		abb: "FOL",
		color: "Orange",
		alternateColor: "Red",
		content: "The frontmost point of a housing lot. Most usually used to identify roadways, which lie between the front of lots. Usually, roads are between the orange stake lines.",
	},
	
	{
		title: "Middle of Lot",
		abb: "MID",
		color: "Green",
		alternateColor: "None",
		content: "The centrepoint of a housing lot. Typically used to indicate the grade (or ground height) required throughout the housing lot area. Sometimes a lot will have two midlot stakes equidistant drom each other.",
	},

	{
		title: "Back of Lot",
		abb: "BOL",
		color: "Blue",
		alternateColor: "None",
		content: "The backmost point of a housing lot. Often indicates either a fenceline (which will be placed on top of a berm) or an alley (which will often have to back of lot stakes next to each other.",
	},

	{
		title: "Garage Pad",
		abb: "GP",
		color: "Pink",
		alternateColor: "Yellow",
		content: "The edge of a garage area, typically between the back of lot and the middle of lot. Sometimes garage pad sticks will not be provided and grades personnel will be required to pull an offset at a specific distance, usually 11 meters.",
	},

]


export default function stationsInfo() {
	return stations
}