import React from "react";
import Block from "./Block";
import BlockConnection from "./BlockConnection.js";
import Reflux from "reflux";
import GraphStore, { GraphStoreActions } from "./GraphStore";

class GraphEditor extends Reflux.Component
{
	constructor(props)
	{
		super(props);
		this.state = { flag: false };
		this.store = GraphStore;
	}

	componentDidMount()
	{
			GraphStoreActions.loadNodeDefinitions();
			GraphStoreActions.loadGraph();
	}

	render()
	{
		return (
			<div>
				<h2>Graph Editor</h2>
				{ this.state.nodeDefinitions &&
					<div>
						<h3>Node Definitions</h3>
						<ul>
						{ this.state.nodeDefinitions.nodes.map((node) =>
							<li key={node.key}>{ node.title }</li>
						)}
						</ul>
					</div>
				}

				{ this.state.graph &&
					<div>
						<h3>Graph</h3>
						<svg style={{ width: "1200px", height: "700px", backgroundColor: "#555" }}>
							{this.state.graph.nodes.map((node, index) => 
								<Block key={node.key} node={node} />
							)}

							{this.state.graph.connections.map((connection, index) =>
								<BlockConnection key={connection.key} connection={connection} />
							)}
						</svg>
					</div>
				}
			</div>
		);
	}
}

export default GraphEditor;