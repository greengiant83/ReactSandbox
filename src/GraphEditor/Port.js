import React from "react";

class Port extends React.Component
{
	render()
	{
		return (
			<g transform={`translate(${this.props.x},${this.props.y})`}>
				<circle r="10" style={{ fill: "#fff" }}></circle>
				<text
						style={{
							fontSize:"16",
							fill:"#ffffff",
						}}
						x="12"
						y="6">
						{this.props.port.title}
					</text>
			</g>
		);
	}
}

export default Port;