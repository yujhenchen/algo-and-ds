// priorityQueue.test.ts

import { PriorityQueue } from "../src/binaryHeap/priorityQueue";

describe('PriorityQueue', () => {
	let pq: PriorityQueue;

	beforeEach(() => {
		pq = new PriorityQueue();
	});

	describe('enqueue', () => {
		it('should add a single element to an empty queue', () => {
			pq.enqueue(10, 1);
			expect(pq.values.length).toBe(1);
			expect(pq.values[0]).toEqual(expect.objectContaining({ value: 10, priority: 1 }));
		});

		it('should maintain correct size after multiple enqueues', () => {
			pq.enqueue(10, 1);
			pq.enqueue(20, 2);
			pq.enqueue(30, 3);
			expect(pq.values.length).toBe(3);
		});

		it('should order elements based on priority (min-heap behavior)', () => {
			pq.enqueue(20, 1);
			pq.enqueue(10, 3);
			pq.enqueue(30, 2);
			pq.enqueue(40, 4);
			pq.enqueue(50, 5);
			pq.enqueue(60, 7);

			// NOTE: not guaranteed sorted
			// const priorities = pq.values.map(node => node.priority);
			// const sorted = [...priorities].sort((a, b) => a - b);
			// console.log(priorities, sorted);
			// expect(priorities).toEqual(sorted);

			const heap = pq['values']; // or pq['heap'], depending on your class

			for (let i = 0; i < heap.length; i++) {
				const leftIndex = 2 * i + 1;
				const rightIndex = 2 * i + 2;

				if (leftIndex < heap.length) {
					expect(heap[i].priority).toBeLessThanOrEqual(heap[leftIndex].priority);
				}

				if (rightIndex < heap.length) {
					expect(heap[i].priority).toBeLessThanOrEqual(heap[rightIndex].priority);
				}
			}
		});

		it('should correctly store both value and priority', () => {
			pq.enqueue(5, 99);
			const node = pq.values[0];
			expect(node.value).toBe(5);
			expect(node.priority).toBe(99);
		});

		it('should not mutate input arguments', () => {
			const value = 100;
			const priority = 10;
			pq.enqueue(value, priority);
			expect(value).toBe(100);
			expect(priority).toBe(10);
		});

		// Additional & Boundary Tests

		it('should handle negative priorities correctly', () => {
			pq.enqueue(1, -1);
			pq.enqueue(2, -5);
			pq.enqueue(3, 0);

			// const priorities = pq.values.map(n => n.priority);
			// const sorted = [...priorities].sort((a, b) => a - b);
			// expect(priorities).toEqual(sorted);
			const heap = pq['values']; // or pq['heap'], depending on your class

			for (let i = 0; i < heap.length; i++) {
				const leftIndex = 2 * i + 1;
				const rightIndex = 2 * i + 2;

				if (leftIndex < heap.length) {
					expect(heap[i].priority).toBeLessThanOrEqual(heap[leftIndex].priority);
				}

				if (rightIndex < heap.length) {
					expect(heap[i].priority).toBeLessThanOrEqual(heap[rightIndex].priority);
				}
			}
		});

		it('should handle duplicate priorities without error', () => {
			pq.enqueue(1, 2);
			pq.enqueue(2, 2);
			pq.enqueue(3, 2);

			expect(pq.values.length).toBe(3);
			pq.values.forEach(node => expect(node.priority).toBe(2));
		});

		it('should handle priority of 0 as highest', () => {
			pq.enqueue(1, 10);
			pq.enqueue(2, 0);
			pq.enqueue(3, 5);
			expect(pq.values[0].priority).toBe(0);
		});

		it('should handle very large priorities', () => {
			pq.enqueue(1, Number.MAX_SAFE_INTEGER);
			expect(pq.values[0].priority).toBe(Number.MAX_SAFE_INTEGER);
		});

		it('should handle very small (negative) priorities', () => {
			pq.enqueue(1, Number.MIN_SAFE_INTEGER);
			expect(pq.values[0].priority).toBe(Number.MIN_SAFE_INTEGER);
		});

		it('should enqueue values with floating point priorities', () => {
			pq.enqueue(1, 1.5);
			pq.enqueue(2, 0.3);
			pq.enqueue(3, 2.1);

			// const priorities = pq.values.map(n => n.priority);
			// const sorted = [...priorities].sort((a, b) => a - b);
			// // console.log(priorities, sorted);
			// expect(priorities).toEqual(sorted);
			const heap = pq['values']; // or pq['heap'], depending on your class

			for (let i = 0; i < heap.length; i++) {
				const leftIndex = 2 * i + 1;
				const rightIndex = 2 * i + 2;

				if (leftIndex < heap.length) {
					expect(heap[i].priority).toBeLessThanOrEqual(heap[leftIndex].priority);
				}

				if (rightIndex < heap.length) {
					expect(heap[i].priority).toBeLessThanOrEqual(heap[rightIndex].priority);
				}
			}
		});

		it('should keep correct order with mixed integer priorities', () => {
			pq.enqueue(1, 5);
			pq.enqueue(2, 3);
			pq.enqueue(3, 1);
			pq.enqueue(4, -1);

			// const priorities = pq.values.map(n => n.priority);
			// const sorted = [...priorities].sort((a, b) => a - b);
			// // console.log(priorities, sorted);
			// expect(priorities).toEqual(sorted);
			const heap = pq['values']; // or pq['heap'], depending on your class

			for (let i = 0; i < heap.length; i++) {
				const leftIndex = 2 * i + 1;
				const rightIndex = 2 * i + 2;

				if (leftIndex < heap.length) {
					expect(heap[i].priority).toBeLessThanOrEqual(heap[leftIndex].priority);
				}

				if (rightIndex < heap.length) {
					expect(heap[i].priority).toBeLessThanOrEqual(heap[rightIndex].priority);
				}
			}
		});
	});

	describe('dequeue', () => {
		let pq: PriorityQueue;

		beforeEach(() => {
			pq = new PriorityQueue();
		});

		it('should return undefined when dequeue is called on an empty queue', () => {
			expect(pq.dequeue()).toBeUndefined();
		});

		it('should remove and return the only element in a single-element queue', () => {
			pq.enqueue(20, 5);
			const removed = pq.dequeue();
			expect(removed).toEqual(expect.objectContaining({ value: 20, priority: 5 }));
			expect(pq.values.length).toBe(0);
		});

		it('should remove the element with the highest priority (lowest priority number)', () => {
			pq.enqueue(30, 3);
			pq.enqueue(40, 1);
			pq.enqueue(50, 2);

			const removed = pq.dequeue();
			expect(removed).toEqual(expect.objectContaining({ value: 40, priority: 1 }));
		});

		it('should maintain heap property after multiple dequeues', () => {
			pq.enqueue(10, 4);
			pq.enqueue(20, 2);
			pq.enqueue(30, 1);
			pq.enqueue(40, 3);

			expect(pq.dequeue()).toEqual(expect.objectContaining({ value: 30, priority: 1 }));
			expect(pq.dequeue()).toEqual(expect.objectContaining({ value: 20, priority: 2 }));
			expect(pq.dequeue()).toEqual(expect.objectContaining({ value: 40, priority: 3 }));
			expect(pq.dequeue()).toEqual(expect.objectContaining({ value: 10, priority: 4 }));
			expect(pq.dequeue()).toBeUndefined();
		});

		// TODO: this need to have extra control to maintain the same order when same priority?
		// it('should handle duplicate priorities by returning elements in insertion order', () => {
		// 	pq.enqueue(1, 2);
		// 	pq.enqueue(2, 2);
		// 	pq.enqueue(3, 2);

		// 	const first = pq.dequeue();
		// 	const second = pq.dequeue();
		// 	const third = pq.dequeue();

		// 	expect(first?.priority).toBe(2);
		// 	expect(second?.priority).toBe(2);
		// 	expect(third?.priority).toBe(2);

		// 	const values = [first?.value, second?.value, third?.value];
		// 	expect(values).toEqual([1, 2, 3]);
		// });
	});

});
