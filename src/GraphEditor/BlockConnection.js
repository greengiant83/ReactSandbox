import React from "react";

class BlockConnection extends React.Component
{
	//TODO: The path values are hard coded and need to actually tie to real port locations
	render()
	{
		return (
			<path style={{ fill:"none",stroke:"#fff",strokeWidth:3 }}
							d="M 100,215 C 100,285 350,215 350,285" />
		);
	}
}

export default BlockConnection;