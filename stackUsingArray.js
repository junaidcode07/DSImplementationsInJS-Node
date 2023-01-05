class Stack {
    constructor() {

        this.array = []
        //this.items = []
    }

    push() {
        for (let i = 0; i <= 100; i++) {
            this.array.push(i)
        }
    }
    pop() {
        if (this.array.length == 0)
            return "Underflow"
        return this.array.pop()
    }

    peek() {
        return this.array[this.array.length - 1]
    }

    isEmpty() {
        return this.array.length == 0
    }

    printStack() {
        var str = ""
        for (let i = 0; i < this.array.length; i++)
            str += this.array[i] + " "
        return str
    }
}

var stack = new Stack()
stack.push()

console.log(stack.printStack());
stack.pop()
console.log(stack.printStack());
//console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.peek())
//console.log(stack.)
