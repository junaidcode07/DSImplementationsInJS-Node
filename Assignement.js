// Implementaion of BST using a linked list.
// Creating a node, and information about its left and right child.
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

// Creating a binary tree and tracking the root node.
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const node = new Node(data)
        if (this.root === null)
            this.root = node
        else
            this.insertNewNode(this.root, node)
    }
    // First we have to find the position where we have to insert the new element 
    // That would be going throug from root as we know...
    insertNewNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null)
                root.left = newNode
            else
                this.insertNewNode(root.left, newNode)
        } else {
            if (root.right === null)
                root.right = newNode
            else
                this.insertNewNode(root.right, newNode)
        }
    }

    search(value) {

        let current = this.root
        while (current) {
            if (current.data == value) {
                return true
            }
            else if (value < current.data) {
                current = current.left
            }

            else {
                current = current.right
            }
        }
        return false

    }

    getRootNode() {
        return this.root
    }

    inorderTraversal(node) {
        if (node != null) {
            this.inorderTraversal(node.left)
            console.log(node.data)
            this.inorderTraversal(node.right)
        }
    }
}

const element = new BinarySearchTree()
element.insert(15)
element.insert(5)
element.insert(19)
element.insert(2)
element.insert(12)
element.insert(22)
element.insert(25)
element.insert(35)
element.insert(9)
element.insert(10)
element.insert(7)
element.insert(4)
element.insert(80)

const rooot = element.getRootNode()
console.log("This is the root node", rooot.data)


var root = element.getRootNode()
element.inorderTraversal(root)

console.log("Data exists? ",element.search(1500))
