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

	public DFS_iterative(vertex: string): Array<string> {
		if (!this.adjacencyList[vertex]) {
			return [];
		}

		// NOTE: my approach 1st
		// const stack: Array<string> = [];
		// const visitedSet: Set<string> = new Set();
		// // const results: Array<string> = [];
		// let current = vertex;
		// let neighbors: Array<string> = [];

		// stack.push(current);
		// visitedSet.add(current);

		// while (stack.length) {
		// 	neighbors = this.adjacencyList[current];
		// 	for (let neighbor of neighbors) {
		// 		if (!visitedSet.has(neighbor)) {
		// 			stack.push(neighbor);
		// 			visitedSet.add(neighbor);
		// 		}
		// 	}
		// 	stack.shift();
		// 	current = stack[0];
		// }

		// NOTE: AI approach, stack is last in first out
		const stack: Array<string> = [vertex];
		const visitedSet: Set<string> = new Set([vertex]);
		const result: Array<string> = [];

		let current: string | undefined = undefined;
		let neighbors: Array<string> = [];

		while (stack.length) {
			current = stack.pop();
			if (current) {
				result.push(current);

				neighbors = this.adjacencyList[current];
				for (let neighbor of neighbors.slice().reverse()) {
					if (!visitedSet.has(neighbor)) {
						stack.push(neighbor);
						visitedSet.add(neighbor);
					}
				}
			}
		}

		return Array.from(visitedSet);
	}

	public BFS(vertex: string): Array<string> {
		if (!this.adjacencyList[vertex]) {
			return [];
		}

		const queue: Array<string> = [vertex];
		const visitedSet: Set<string> = new Set([vertex]);
		const result: Array<string> = [];

		let current: string | undefined = undefined;
		let neighbors: Array<string> = [];

		while (queue.length) {
			current = queue.shift();
			if (current) {
				result.push(current);

				neighbors = this.adjacencyList[current];
				for (let neighbor of neighbors) {
					if (!visitedSet.has(neighbor)) {
						queue.push(neighbor);
						visitedSet.add(neighbor);
					}
				}
			}
		}
		return result;
	}
}
