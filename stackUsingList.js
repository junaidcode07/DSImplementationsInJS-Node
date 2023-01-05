class Node {
    constructor() {
        this.data = 0
        this.link = null
    }
}

class StackUsingLinkedList {
    constructor() {
        this.top = null
    }
    push(element) {
        const node = new Node()
        if(node === null) {
            return console.log("Stack overflow")
        }

        node.data = element
        node.link = this.top
        this.top = node
    }

    isEmpty() {
        return this.temp === null
    }

    peek() {
        if(!this.isEmpty()) {
            return this.top.data
        } else {
            console.log("stack is empty")
            return -1
        }
    }

    pop() {
        if(this.top == null) {
            return console.log("stack is underflow")
        } else {
            this.top = this.top.link
        }
    }

    display() {
        if(this.top == null) {
            return console.log("stack underflow")
        } else {
            let node = this.top
            while(node!= null) {
                console.log(node.data+ " -->")
                node = node.link
            }
        }
    }
}

let obj = new StackUsingLinkedList();
// insert Stack value
obj.push(11);
obj.push(22);
obj.push(33);
obj.push(44);
console.log("Top element is " + obj.peek())
// print Stack elements
obj.display();
obj.pop();
obj.pop();
console.log("Top element is " + obj.peek())

obj.display();