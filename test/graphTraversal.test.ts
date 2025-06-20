import { Graph } from "../src/graphTraversal";

describe('graph traversal', () => {
	let graph: Graph;

	beforeEach(() => {
		graph = new Graph();
	});

	it('should return a single vertex if only one node exists', () => {
		graph.addVertex('A');
		expect(graph.DFS('A')).toEqual(['A']);
	});

	it('should perform DFS on a connected graph', () => {
		graph.addVertex('A');
		graph.addVertex('B');
		graph.addVertex('C');
		graph.addVertex('D');

		graph.addEdge('A', 'B');
		graph.addEdge('A', 'C');
		graph.addEdge('B', 'D');

		const result = graph.DFS('A');
		expect(result).toContain('A');
		expect(result).toContain('B');
		expect(result).toContain('C');
		expect(result).toContain('D');
		expect(result.length).toBe(4);
	});

	it('should not revisit nodes in a cyclic graph', () => {
		graph.addVertex('A');
		graph.addVertex('B');
		graph.addVertex('C');

		graph.addEdge('A', 'B');
		graph.addEdge('B', 'C');
		graph.addEdge('C', 'A'); // cycle

		const result = graph.DFS('A');
		expect(new Set(result)).toEqual(new Set(['A', 'B', 'C']));
		expect(result.length).toBe(3);
	});

	it('should return only reachable nodes in a disconnected graph', () => {
		graph.addVertex('A');
		graph.addVertex('B');
		graph.addVertex('C'); // not connected

		graph.addEdge('A', 'B');

		const result = graph.DFS('A');
		expect(result).toEqual(expect.arrayContaining(['A', 'B']));
		expect(result).not.toContain('C');
		expect(result.length).toBe(2);
	});

	it('should throw an error or return empty if the vertex does not exist', () => {
		expect(() => graph.DFS('Z')).toThrow();
		// or alternatively if your implementation returns an empty array:
		// expect(graph.DFS('Z')).toEqual([]);
	});

});
