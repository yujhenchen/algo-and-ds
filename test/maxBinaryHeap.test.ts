import { MaxBinaryHeap } from "../src/binaryHeap/maxBinaryHeap";

describe('MaxBinaryHeap', () => {
	let heap: MaxBinaryHeap;

	beforeEach(() => {
		heap = new MaxBinaryHeap();
	});

	test('should insert a single value into an empty heap', () => {
		heap.insert(10);
		expect(heap.values).toEqual([10]);
	});

	test('should maintain max-heap property after multiple inserts', () => {
		heap.insert(10);
		heap.insert(20);
		heap.insert(5);
		heap.insert(100);
		heap.insert(1);

		// Max heap should have the highest value at the root
		expect(heap.values[0]).toBe(Math.max(...heap.values));

		// Check if max-heap property is maintained
		for (let i = 0; i < heap.values.length; i++) {
			const left = 2 * i + 1;
			const right = 2 * i + 2;

			if (left < heap.values.length) {
				expect(heap.values[i]).toBeGreaterThanOrEqual(heap.values[left]);
			}
			if (right < heap.values.length) {
				expect(heap.values[i]).toBeGreaterThanOrEqual(heap.values[right]);
			}
		}
	});

	test('should place largest number at the top after many inserts', () => {
		const nums = [3, 1, 6, 5, 2, 4];
		nums.forEach(n => heap.insert(n));
		expect(heap.values[0]).toBe(Math.max(...nums));
	});
});

describe('MaxBinaryHeap - remove()', () => {
	let heap: MaxBinaryHeap;

	beforeEach(() => {
		heap = new MaxBinaryHeap();
	});

	test('removing from empty heap does nothing', () => {
		heap.remove();
		expect(heap.values).toEqual([]);
	});

	test('removes the max value and reheapifies', () => {
		heap['values'] = [100, 50, 30, 20, 10, 5]; // valid max heap
		heap.remove(); // should remove 100

		// 100 is removed and replaced with 5 → heapify down
		expect(heap.values[0]).toBeLessThan(100); // max was removed
		expect(heap.values.length).toBe(5);

		// Validate heap property: parent ≥ children
		for (let i = 0; i < heap.values.length; i++) {
			const left = 2 * i + 1;
			const right = 2 * i + 2;
			if (left < heap.values.length) {
				expect(heap.values[i]).toBeGreaterThanOrEqual(heap.values[left]);
			}
			if (right < heap.values.length) {
				expect(heap.values[i]).toBeGreaterThanOrEqual(heap.values[right]);
			}
		}
	});

	test('removes the max value and reheapifies (2)', () => {
		heap['values'] = [7, 13, 6, 2, 5]; // valid max heap
		heap.remove(); // should remove 100

		// 100 is removed and replaced with 5 → heapify down
		expect(heap.values[0]).toBeLessThan(100); // max was removed
		expect(heap.values.length).toBe(4);

		// Validate heap property: parent ≥ children
		for (let i = 0; i < heap.values.length; i++) {
			const left = 2 * i + 1;
			const right = 2 * i + 2;
			if (left < heap.values.length) {
				expect(heap.values[i]).toBeGreaterThanOrEqual(heap.values[left]);
			}
			if (right < heap.values.length) {
				expect(heap.values[i]).toBeGreaterThanOrEqual(heap.values[right]);
			}
		}
	});

	test('removes root when only one element', () => {
		heap.insert(42);
		heap.remove();
		expect(heap.values).toEqual([]);
	});
});
