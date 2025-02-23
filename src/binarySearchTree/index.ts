// Root: the top node in a tree
// Child: a node directly connected to another node when moving away from the root
// Parent: the converse notion of a child
// Siblings: a group of nodes with the same parent
// Leaf: a node with no children
// Edge: the connection between one node and another


// types of trees
// trees
// binary trees: each node has at most two children

// binary search trees (BST):
// stores data that can be paired
// , every parent node has at most two children
// , every node to the left of a parent node is always less than the parent
// , every node to the right of a parent node is always greater than the parent

// Binary Search Tree Big O 
// insert: O(log n)
// find: O(log n)

class BSTNode {
	value: number;
	left: null | BSTNode;
	right: null | BSTNode;
	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export class BinarySearchTree {
	root: null | BSTNode;
	constructor() {
		this.root = null;
	}

	private insertNode(currentRoot: BSTNode, value: number): void {
		if (value > currentRoot.value) {
			if (currentRoot.right) {
				this.insertNode(currentRoot.right, value);
			}
			else {
				currentRoot.right = new BSTNode(value);
			}
		}
		else {
			if (currentRoot.left) {
				this.insertNode(currentRoot.left, value);
			}
			else {
				currentRoot.left = new BSTNode(value);
			}
		}
	}

	public insert(value: number): void {
		const newNode = new BSTNode(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		this.insertNode(this.root, value);
	}

	private findNode(currentRoot: BSTNode | null, value: number): BSTNode | null {
		if (!currentRoot) {
			return null;
		}

		if (value === currentRoot.value) {
			return currentRoot;
		}
		return value > currentRoot.value ? this.findNode(currentRoot.right, value) : this.findNode(currentRoot.left, value);
	}

	public find(value: number): BSTNode | null {
		return this.findNode(this.root, value);
	}
}

