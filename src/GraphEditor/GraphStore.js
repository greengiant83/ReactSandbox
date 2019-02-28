import Reflux from "reflux";

export const GraphStoreActions = Reflux.createActions(["loadNodeDefinitions", "loadGraph"]);

class GraphStore extends Reflux.Store
{
	constructor(props)
	{
		super(props);
		this.listenables = GraphStoreActions;
	}

	onLoadGraph()
	{
		//TODO: This is mock data. Hook up to something real
		//TODO: need to ensure that node definitions have been loaded first

		//Pretending this is loaded from JSON persisted in some random data store
		var graph = {
			nodes: [
				{
					key: 101,
					definitionKey: "Boolean",
					title: "My Boolean",
					x: 50,
					y: 100,
				},

				{
					key: 102,
					definitionKey: "Scatter",
					title: "My Scatter",
					x: 300,
					y: 300,
				}
			],

			connections: [
				{ 
					key: 201,
					from: { nodeKey: 101, portKey: "101.Out" },
					to: { nodeKey: 102, portKey: "102.In" }
				}
			]
		};

		this.expandGraphModel(graph);

		this.setState(Object.assign({}, this.state, { graph: graph }));
	}

	expandGraphModel(graph)
	{
		graph.nodes.forEach(node => {
			var definition = this.state.nodeDefinitions.nodes.find(definition => definition.key === node.definitionKey);
			node.inputs = definition.inputs.map(port => Object.assign({}, port, { key: node.key + "." + port.key }));
			node.outputs = definition.outputs.map(port => Object.assign({}, port, { key: node.key + "." + port.key }));
		});

		/*graph.connections.forEach(connection => {
				connection.key = connection.nodeKey + "." + connection.portKey;
		});*/
	}

	onLoadNodeDefinitions()
	{
		//TODO: This is mock data. Hook up to something real
		//Pretending this is loaded from JSON persisted in some random data store
		var nodes = {
			source: "TODO: setup source stuff",
			nodes: [
				{
					key: "Boolean",
					title: "Boolean",

					inputs: [
						{ type: "Geometry", key: "A", title: "A" },
						{ type: "Geometry", key: "B", title: "B" },
					],

					outputs: [
						{ type: "Geometry", key: "Out", title: "Result" },
					]
				},

				{
					key: "Scatter",
					title: "Scatter Points",

					inputs: [
						{ type: "Geometry", key: "In", title: "Input" },
					],

					outputs: [
						{ type: "Geometry", key: "Out", title: "Output" },
					]
				},
			]
		}
		this.setState(Object.assign({}, this.state, { nodeDefinitions: nodes }));
	}
}

export default GraphStore;