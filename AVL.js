class Node {
    constructor(item) {
        this.item = item
        this.height = 1
        this.left = null
        this.right = null
    }
}

class AVLTree {
    constructor() {
        this.root = null
    }

    insertNode = (item) => {
        this.root = this.insertNewNode(this.root, item)
    }

    insertNewNode = (root, item) => {

        if (root === null) {
            return (new Node(item))
        }
        if (item < root.item) {
            root.left = this.insertNewNode(root.left, item)
        } else if (item > root.item) {
            root.right = this.insertNewNode(root.right, item)
        } else {
            return root
        }

        this.getHeight(root)
    

        let balanceFactor = this.getBalanceFactor(root)
        if (balanceFactor > 1) {
            if (item < root.left.item) {
                return this.rightRotation(root)
            } else if (item > root.left.item) {
                root.left = this.leftRotation(root.left)
                return this.rightRotation(root)
            }
        }

        if (balanceFactor < -1) {
            if (item > root.right.item) {
                return this.leftRotation(root)
            } else if (item < root.right.item) {
                root.right = this.rightRotation(root.right)
                return this.leftRotation(root)
            }
        }
        return root
    }

    delete(item) {
        this.root = this.deleteNodeFromTree(this.root, item)
    }

    deleteNodeFromTree(root, item) {
        if (root === null) {
            return root
        }
        if (item < root.item) {
            root.left = this.deleteNodeFromTree(root.left, item)
        } else if (item > root.item) {
            root.right = this.deleteNodeFromTree(root.right, item)
        } else {
            if (root.left === null || root.right === null) {
                let temp = null
                if (root.left === temp) {
                    temp = root.right
                } else {
                    temp = root.left
                }
                if (temp === null) {
                    temp = root
                    root = null
                } else {
                    root = temp
                }
            } else {
                let temp = this.nodeWithMinimumValue(root.right)
                root.item = temp.item
                root.right = this.deleteNodeFromTree(root.right, temp.item)
            }
        }
        if (root === null) {
            return root
        }

        this.getHeight(root)
        let balanceFactor = this.getBalanceFactor(root)
        if (balanceFactor > 1) {
            if (this.getBalanceFactor(root.left) >= 0) {
                return this.rightRotate(root);
            } else {
                root.left = this.leftRotation(root.left);
                return this.rightRotation(root);
            }
        }
        if (balanceFactor < -1) {
            if (this.getBalanceFactor(root.right) <= 0) {
                return this.leftRotation(root);
            } else {
                root.right = this.rightRotation(root.right);
                return this.leftRotation(root);
            }
        }
        return root;
    }

    getHeight(root) {
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
    }

    nodeWithMinimumValue(node) {
        let current = node
        while (current.left != null) {
            current = current.left
        }
        return current
    }

    leftRotation(node) {
        let nodeToBecomeParent = node.right
        let temp = nodeToBecomeParent.left
        nodeToBecomeParent.left = node
        node.right = temp
        this.getHeight(node)
        this.getHeight(nodeToBecomeParent)
        return nodeToBecomeParent

    }

    rightRotation(node) {
        let nodeToBecomeParent = node.left
        let temp = nodeToBecomeParent.right
        nodeToBecomeParent.right = node
        node.left = temp

        this.getHeight(node)
        this.getHeight(nodeToBecomeParent)
        return nodeToBecomeParent
    }

    height(node) {
        if (node === null) {
            return 0
        }
        return node.height
    }
    getBalanceFactor(node) {
        if (node === null) {
            return 0
        }
        return this.height(node.left) - this.height(node.right)

    }

    Inorder() {
        this.inorderTraversal(this.root)
    }
    inorderTraversal(node) {
        if (node) {
            this.inorderTraversal(node.left)
            console.log(node.item)
            this.inorderTraversal(node.right)
        }
    }
}

const tree = new AVLTree()
tree.insertNode(1)
tree.insertNode(2)
tree.insertNode(1)
tree.insertNode(2)
tree.insertNode(3)
tree.insertNode(4)
tree.insertNode(5)
tree.insertNode(19)
tree.insertNode(35)
tree.insertNode(14)
tree.insertNode(12)
tree.insertNode(40)
tree.insertNode(54)
tree.Inorder()
tree.delete(4)
tree.delete(2)
tree.delete(1)
tree.delete(14)
tree.delete(40)
tree.delete(54)
console.log("After deletion")
tree.Inorder()
