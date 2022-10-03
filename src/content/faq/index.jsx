import React from "react";
import faqInfo from "./content";
import { Table } from "react-bootstrap";
import { Accordian } from "../../components/accordian";

export function Display() {

	const { lengths, distances, copy } = faqInfo()

	const Lengths = () => {

		const Data = lengths.map((item) => {
			return (
				<tr key={item.name}>
					<td>{item.name}</td>
					<td>{item.standard}</td>
					<td>{item.minimum}</td>
					<td>{item.maximum}</td>
				</tr>
			)
		})

		return (
			<Table responsive bordered striped hover>
				<thead>
					<tr><td colSpan={4}>Offset Lengths</td></tr>
					<tr>
						<td rowSpan={2}>Machine</td>
						<td colSpan={3}>Lengths (m)</td>
					</tr>
					<tr>
						<td>Standard</td>
						<td>Minimum</td>
						<td>Maximum</td>
					</tr>
				</thead>
				<tbody>
					{Data}
				</tbody>
			</Table>
		)
	}


	const Distances = () => {
		const Data = distances.map((item) => {
			return (
				<tr key={item.name}>
					<td>{item.name}</td>
					<td>{item.empty}</td>
					<td>{item.loaded}</td>
				</tr>
			)
		})

		return (
			<Table responsive bordered striped hover>
				<thead>
					<tr><td colSpan={3}>Minimum Safe Distances</td></tr>
					<tr>
						<td rowSpan={2}>Machine</td>
						<td colSpan={2}>Distance (m)</td>
					</tr>
					<tr>
						<td>Loaded</td>
						<td>Empty</td>
					</tr>
				</thead>
				<tbody>
					{Data}
				</tbody>
			</Table>
		)
	}

	return (
		<div className="w-[80%]">
			<Accordian title="Minimum Safe Distances">
				<p className="p-4">{copy.minimumSafeDistances}</p>
				<Distances />
			</Accordian>
			<br />
			<Accordian title="Offset Lengths">
				<p className="p-4">{copy.offSetLengths}</p>
				<Lengths />
			</Accordian>
		</div>

	)
}