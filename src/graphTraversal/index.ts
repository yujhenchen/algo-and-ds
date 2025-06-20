// undirected graph
export class Graph {
	public adjacencyList: Record<string, Array<string>>;

	public constructor() {
		this.adjacencyList = {};
	}

	public addVertex(name: string): void {
		if (!this.adjacencyList[name]) {
			this.adjacencyList[name] = [];
		}
	}

	public addEdge(vertex1: string, vertex2: string): void {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	public removeEdge(vertex1: string, vertex2: string): void {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
	}

	public removeVertex(vertex: string): void {
		if (!this.adjacencyList[vertex]) {
			return;
		}

		Object.keys(this.adjacencyList).forEach(v => {
			if (this.adjacencyList[v].includes(vertex)) {
				this.removeEdge(v, vertex)
			}
		});
		delete this.adjacencyList[vertex];
	}

	public DFS(vertex: string): Array<string> {
		// NOTE: my approach
		// const visitedList: Array<string> = [];
		// if (!vertex) {
		// 	return visitedList;
		// }

		// // recursive
		// const traverse = (v: string) => {
		// 	const neighbors = this.adjacencyList[v];
		// 	for (let neighbor of neighbors) {
		// 		if (neighbor && !visitedList.includes(neighbor)) {
		// 			visitedList.push(neighbor);
		// 			traverse(neighbor);
		// 		}
		// 	}
		// }

		// visitedList.push(vertex);
		// traverse(vertex);
		// return visitedList;

		// NOTE: AI version
		const visitedSet: Set<string> = new Set();
		const result: Array<string> = [];

		const traverse = (v: string) => {
			if (!v || visitedSet.has(v)) {
				return;
			}
			visitedSet.add(v);
			result.push(v);
			const neighbors = this.adjacencyList[v];
			for (let neighbor of neighbors) {
				traverse(neighbor);
			}
		};

		traverse(vertex);
		return result;
	}
}
