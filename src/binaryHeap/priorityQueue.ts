/*
A binary heap (min-heap) only ensures:

- The smallest priority is at index 0 (the root).
- For any node at index i, the children at 2i+1 and 2i+2 have greater or equal priority.

But the array is not fully sorted. It maintains a heap order, not a sorted order.
*/

export class HeapNode {
  public value: number;
  public priority: number;

  public constructor(value: number, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

export class PriorityQueue {
  public values: Array<HeapNode> = [];

  // NOTE: my approach 1st. This is not the right approach, should use bubble up instead
  // public enqueue(value: number, priority: number): void {
  //   const newNode = new HeapNode(value, priority);
  //   if (this.values.length === 0) {
  //     this.values.push(newNode);
  //     return;
  //   }

  //   let current = 0;
  //   let left: number;
  //   let right: number;
  //   while (true) {
  //     left = 2 * current + 1;
  //     right = 2 * current + 2;

  //     if (current >= this.values.length) {
  //       break;
  //     }

  //     if (newNode.priority >= this.values[current].priority) {
  //       // unshift if current === 0
  //       if (current === 0) {
  //         this.values.unshift(newNode);
  //       }
  //       else {
  //         // else, insert new node use splice
  //         this.values.splice(current, 0, newNode);
  //       }
  //       break;
  //     }

  //     // if has left && new priority >= left priority
  //     if (left < this.values.length && newNode.priority >= this.values[left].priority) {
  //       this.values.splice(left, 0, newNode);
  //       break;
  //     }

  //     // if has right && new priority >= right priority
  //     if (right < this.values.length && newNode.priority >= this.values[right].priority) {
  //       this.values.splice(right, 0, newNode);
  //       break;
  //     }
  //     current = right;
  //   }
  // }

  private getPriority(value: number): number {
    return -value;
  }

  // NOTE: my approach 2nd
  // private bubble() {
  //   let current = this.values.length - 1;
  //   let parent = Math.floor((current - 1) / 2);
  //   while (true) {
  //     if (current < 0) {
  //       break;
  //     }

  //     // if no parent
  //     if (parent < 0) {
  //       // if has node with index (current - 1 ) && node with index (current - 1 ) has higher priority than current
  //       // swap current with node with index (current - 1 )
  //       // break;
  //       if ((current - 1 >= 0) && this.getPriority(this.values[current].priority) > this.getPriority(this.values[current - 1].priority)) {
  //         [this.values[current - 1], this.values[current]] = [this.values[current], this.values[current - 1]];
  //         break;
  //       }
  //       else {
  //         break;
  //       }
  //     }
  //     // has parent
  //     if (parent >= 0) {
  //       // current priority > parent priority
  //       if (this.getPriority(this.values[current].priority) > this.getPriority(this.values[parent].priority)) {
  //         [this.values[current], this.values[parent]] = [this.values[parent], this.values[current]];
  //       }
  //       // current priority > current - 1 priority
  //       if ((current - 1 >= 0) && this.getPriority(this.values[current].priority) > this.getPriority(this.values[current - 1].priority)) {
  //         [this.values[current - 1], this.values[current]] = [this.values[current], this.values[current - 1]];
  //       }
  //     }
  //     current = parent;
  //     parent = Math.floor((current - 1) / 2);
  //   }
  // }

  // NOTE: solution by AI
  private bubbleUp(): void {
    let current = this.values.length - 1;
    let parent = 0;
    while (current >= 0) {
      parent = Math.floor((current - 1) / 2) >= 0 ? Math.floor((current - 1) / 2) : 0;

      if (this.getPriority(this.values[parent].priority) >= this.getPriority(this.values[current].priority)) {
        break;
      }

      [this.values[parent], this.values[current]] = [this.values[current], this.values[parent]];
      current = parent;
    }
  }


  public enqueue(value: number, priority: number): void {
    // push new node to values
    // call bubble to make the nodes in values correct order
    this.values.push(new HeapNode(value, priority));
    this.bubbleUp();
  }

  private sinkDown(): void {
    let current = 0;
    let left = 0;
    let right = 0;
    let largest = 0;

    while (true) {
      if (current > this.values.length - 1) {
        break;
      }

      left = 2 * current + 1;
      right = 2 * current + 2;

      if (left < this.values.length && this.getPriority(this.values[current].priority) < this.getPriority(this.values[left].priority)) {
        largest = left;
      }

      if (right < this.values.length && this.getPriority(this.values[largest].priority) < this.getPriority(this.values[right].priority)) {
        largest = right;
      }

      if (current === largest) {
        break;
      }

      if (largest !== current) {
        [this.values[largest], this.values[current]] = [this.values[current], this.values[largest]];
        current = largest;
      }

    }
  }

  public dequeue(): HeapNode | undefined {
    // remove the top node
    // move the last node to the top, current = top

    // loop
    // if current priority < left priority
    // if current priority < right priority
    if (this.values.length == 0) {
      return undefined;
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const firstNode = this.values.shift();
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]]

    this.sinkDown();
    return firstNode;
  }
}
