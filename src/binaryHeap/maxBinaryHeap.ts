// Children of node at index n:
// Left child index: 2n + 1
// Right child index: 2n + 2

export class MaxBinaryHeap {
  public values: number[] = [];

  public insert(value: number): void {
    this.values.push(value);
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (true) {
      if (parentIndex < 0) {
        break;
      }
      if (this.values[parentIndex] >= this.values[currentIndex]) {
        break;
      }

      // swap
      // bubble up
      [this.values[parentIndex], this.values[currentIndex]] = [this.values[currentIndex], this.values[parentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }


  // extract max
  // sinking down or call bubble down
  // NOTE: my implementation, swap array often causes performance issues
  // public remove(): void {
  //   if (this.values.length === 0) {
  //     return;
  //   }
  //   [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
  //   this.values.pop();

  //   let currentIndex = 0;
  //   let leftIndex;
  //   let rightIndex;
  //   let outOfBounds = false;
  //   let isMaxHeapValid = false;

  //   while (true) {
  //     leftIndex = 2 * currentIndex + 1;
  //     rightIndex = 2 * currentIndex + 2;

  //     outOfBounds = leftIndex > this.values.length - 1 || rightIndex > this.values.length - 1;
  //     isMaxHeapValid = this.values[currentIndex] >= this.values[leftIndex] || this.values[currentIndex] >= this.values[rightIndex]
  //     if (outOfBounds) {
  //       break;
  //     }

  //     if (this.values[currentIndex] < this.values[leftIndex]) {
  //       [this.values[currentIndex], this.values[leftIndex]] = [this.values[leftIndex], this.values[currentIndex]];
  //       currentIndex = leftIndex;
  //     }
  //     if (this.values[currentIndex] < this.values[rightIndex]) {
  //       [this.values[currentIndex], this.values[rightIndex]] = [this.values[rightIndex], this.values[currentIndex]];
  //       currentIndex = rightIndex;
  //     }
  //   }
  // }

  // AI approach
  public remove(): void {
    if (this.values.length === 0) {
      return; // Empty heap, nothing to remove
    }

    // Swap the root (max element) with the last element
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    this.values.pop(); // Remove the last element

    let currentIndex = 0;

    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let largest = currentIndex;

      // check left
      if (leftIndex < this.values.length && this.values[leftIndex] > this.values[largest]) {
        largest = leftIndex;
      }

      // check right
      if (rightIndex < this.values.length && this.values[rightIndex] > this.values[largest]) {
        largest = rightIndex;
      }

      // break if current is already the largest
      if (currentIndex === largest) {
        break;
      }

      // console.log("before", currentIndex, largest, this.values);
      [this.values[currentIndex], this.values[largest]] = [this.values[largest], this.values[currentIndex]];
      // console.log("after", currentIndex, largest, this.values);
      currentIndex = largest;
      // console.log("after change", currentIndex, largest, this.values);

    }
  }


}
