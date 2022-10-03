import React from "react";

const offSetLengths = [
	{ name: "Scraper", standard: "5", minimum: "3", maximum: "10" },
	{ name: "Dozer", standard: "3", minimum: "2", maximum: "6" },
	{ name: "Grader", standard: "3", minimum: "1", maximum: "5" },
	{ name: "Excavator", standard: "5", minimum: "1", maximum: "10" },
]

const minimumSafeDistances = [
	{ name: "Scraper", empty: "5", loaded: "10" },
	{ name: "Rock Truck", empty: "5", loaded: "10" },
	{ name: "Excavator", empty: "10", loaded: "15" },
	{ name: "Dozer", empty: "3", loaded: "NA" },
	{ name: "Grader", empty: "3", loaded: "NA" },
]

export default function faqInfo() {
	return { lengths: offSetLengths, distances: minimumSafeDistances }
}