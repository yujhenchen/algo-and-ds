import { Graph } from "../src/graphTraversal";

describe('graph traversal', () => {
	let graph: Graph;

	beforeEach(() => {
		graph = new Graph();
	});

	describe('DFS', () => {
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


	describe('DFS iterative', () => {
		it('should handle a self-loop without infinite recursion', () => {
			graph.addVertex('A');
			graph.addEdge('A', 'A'); // self-loop

			const result = graph.DFS_iterative('A');
			expect(result).toEqual(['A']);
		});

		it('should perform DFS correctly on a linear graph', () => {
			graph.addVertex('A');
			graph.addVertex('B');
			graph.addVertex('C');
			graph.addVertex('D');

			graph.addEdge('A', 'B');
			graph.addEdge('B', 'C');
			graph.addEdge('C', 'D');

			const result = graph.DFS_iterative('A');
			expect(result).toEqual(expect.arrayContaining(['A', 'B', 'C', 'D']));
			expect(result.length).toBe(4);
		});

		it('should return an empty array for a graph with no vertices', () => {
			const result = graph.DFS_iterative('A');
			expect(result).toEqual([]);
		});

		it('should perform DFS correctly starting from a non-connected node', () => {
			graph.addVertex('A');
			graph.addVertex('B');
			graph.addVertex('C');

			graph.addEdge('A', 'B'); // C is not connected

			const result = graph.DFS_iterative('C');
			expect(result).toEqual(['C']);
		});

		it('should visit all nodes in a large connected component and skip others', () => {
			graph.addVertex('A');
			graph.addVertex('B');
			graph.addVertex('C');
			graph.addVertex('D');
			graph.addVertex('X');
			graph.addVertex('Y');

			graph.addEdge('A', 'B');
			graph.addEdge('B', 'C');
			graph.addEdge('C', 'D');
			graph.addEdge('X', 'Y'); // Separate component

			const result = graph.DFS_iterative('A');
			expect(result).toEqual(expect.arrayContaining(['A', 'B', 'C', 'D']));
			expect(result).not.toContain('X');
			expect(result).not.toContain('Y');
			expect(result.length).toBe(4);
		});
	});


	describe('BFS', () => {
		it('should return a single vertex if only one node exists', () => {
			graph.addVertex('A');
			expect(graph.BFS('A')).toEqual(['A']);
		});

		it('should perform BFS on a connected graph', () => {
			graph.addVertex('A');
			graph.addVertex('B');
			graph.addVertex('C');
			graph.addVertex('D');

			graph.addEdge('A', 'B');
			graph.addEdge('A', 'C');
			graph.addEdge('B', 'D');

			const result = graph.BFS('A');
			expect(result).toContain('A');
			expect(result).toContain('B');
			expect(result).toContain('C');
			expect(result).toContain('D');
			expect(result.length).toBe(4);

			// Optional: Check BFS-specific traversal order
			expect(result[0]).toBe('A');
		});

		it('should not revisit nodes in a cyclic graph', () => {
			graph.addVertex('A');
			graph.addVertex('B');
			graph.addVertex('C');

			graph.addEdge('A', 'B');
			graph.addEdge('B', 'C');
			graph.addEdge('C', 'A'); // cycle

			const result = graph.BFS('A');
			expect(new Set(result)).toEqual(new Set(['A', 'B', 'C']));
			expect(result.length).toBe(3);
		});

		it('should return only reachable nodes in a disconnected graph', () => {
			graph.addVertex('A');
			graph.addVertex('B');
			graph.addVertex('C'); // not connected

			graph.addEdge('A', 'B');

			const result = graph.BFS('A');
			expect(result).toEqual(expect.arrayContaining(['A', 'B']));
			expect(result).not.toContain('C');
			expect(result.length).toBe(2);
		});

		it('should throw an error or return empty if the vertex does not exist', () => {
			// expect(() => graph.BFS('Z')).toThrow();
			// or if implementation returns empty array:
			expect(graph.BFS('Z')).toEqual([]);
		});
	});


});
