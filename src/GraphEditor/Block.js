import React from "react";
import Port from "./Port";

class Block extends React.Component
{
	render()
	{
		var node = this.props.node;

		return (
			<g transform={`translate(${node.x}, ${node.y})`}>
				<rect
					style={{
						fill: "#009900",
						stroke:"#ffffff",
						strokeWidth:"3",
					}}
					width="200"
					height="100"
					x="0"
					y="0"
					ry="10" />

				<rect
					style={{
						fill: "#444",
						stroke:"#ffffff",
						strokeWidth:"1",
					}}
					width="180"
					height="80"
					x="10"
					y="10"
					ry="10" />

				<text
					style={{
						fontSize:"16",
						fill:"#ffffff",
					}}
					x="20"
					y="55">
					{node.title}
				</text>

				{ node.inputs.map((port, index) =>
					<Port key={port.key} port={port}  x={ 50 + index * 100 } y="-15" />
				)}

				{ node.outputs.map((port, index) =>
					<Port key={port.key} port={port}  x={ 50 + index * 100 } y="115" />
				)}
			</g>
		);
	}
}

export default Block;