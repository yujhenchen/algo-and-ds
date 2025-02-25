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

	public remove(value: number): void {
		// NOTE: first attempt, not good solution
		// if (!this.root) {
		// 	return this;
		// }

		// const getBinarySearchTreeByNodes = (nodes: Array<BSTNode>): BinarySearchTree => {
		// 	const values: Array<number> = [];

		// 	function getNodeValue(node: BSTNode | null): void {
		// 		if (!node) {
		// 			return;
		// 		}
		// 		values.push(node.value);
		// 		getNodeValue(node.left);
		// 		getNodeValue(node.right);
		// 	}

		// 	for (let node of nodes) {
		// 		getNodeValue(node);
		// 	}

		// 	const bst = new BinarySearchTree();
		// 	for (let i = 0; i < values.length; i++) {
		// 		bst.insert(values[i]);
		// 	}
		// 	return bst;
		// }

		// let parent: BSTNode = this.root;
		// let current: BSTNode | null = this.root;
		// const Side = {
		// 	LEFT: "LEFT",
		// 	RIGHT: "RIGHT"
		// } as const;
		// let side: keyof typeof Side = Side.LEFT;


		// while (true) {
		// 	if (!current || current.value === value) {
		// 		break;
		// 	}
		// 	if (value > current.value) {
		// 		side = Side.RIGHT;
		// 		parent = current;
		// 		current = current.right;
		// 	}
		// 	else {
		// 		side = Side.LEFT;
		// 		parent = current;
		// 		current = current.left;
		// 	}
		// }

		// if (current) {
		// 	if (side === Side.LEFT) {
		// 		parent.left = getBinarySearchTreeByNodes([current.left, current.right].filter(node => node !== null)).root;
		// 	}
		// 	else {
		// 		parent.right = getBinarySearchTreeByNodes([current.left, current.right].filter(node => node !== null)).root;
		// 	}
		// }
		// return this;
		this.root = this.removeNode(this.root, value);
	}

	// NOTE: interesting challenge, need to review again
	private removeNode(current: BSTNode | null, value: number): BSTNode | null {
		if (!current) {
			return null;
		}
		if (value < current.value) {
			current.left = this.removeNode(current.left, value);
		}
		else if (value > current.value) {
			current.right = this.removeNode(current.right, value);
		}
		else {
			// case 1: no child node
			if (!current.left && !current.right) {
				return null;
			}
			// case 2: 1 child node
			if (!current.left) {
				return current.right;
			}
			if (!current.right) {
				return current.left;
			}
			// case 3: 2 child node
			// method1: inorder successor: the smallest node in the right subtree
			const inorderSuccessor = this.findMin(current.right);
			current.value = inorderSuccessor.value;
			current.right = this.removeNode(current.right, inorderSuccessor.value);

			// method2: inorder predecessor: the largest node in the left subtree
			// const inorderPredecessor = this.findMax(current.left);
			// current.value = inorderPredecessor.value;
			// current.left = this.removeNode(current.left, inorderPredecessor.value);
		}
		return current;
	}

	private findMin(node: BSTNode): BSTNode {
		while (node.left) {
			node = node.left;
		}
		return node;
	}

	private findMax(node: BSTNode): BSTNode {
		while (node.right) {
			node = node.right;
		}
		return node;
	}
}

