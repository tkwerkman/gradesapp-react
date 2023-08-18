


function LineButton({line, handleClick}) {
	return (
		<div
			onClick={handleClick}
			className="flex px-4 py-2 mx-2 justify-center items-center h-12 min-w-fit max-w-md text-sm border-2 border-slate-300 hover:border-slate-400 rounded-xl cursor-pointer transition-all delay-100"
			style={{
				backgroundColor: line.show?"white":"grey"
			}}
		>
			{line.name}
		</div>
	)
}

function LineButtonGroup({showLines, setShowLines}) {
	const handleClick = (set) => {
		let newShowLines = [...showLines]
		newShowLines.forEach((line, index) => {
			if (line.set == set) {
				newShowLines[index].show = !newShowLines[index].show
			}
		})
		setShowLines([...newShowLines])
	}
	return showLines.map((line) => {
		return <LineButton key={"Line"+line.name} line={line} handleClick={() => handleClick(line.set)}/>
	})
}

export {LineButtonGroup};