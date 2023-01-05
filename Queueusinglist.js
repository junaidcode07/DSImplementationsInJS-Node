class Qnode {
    constructor(data) {
        this.data = data
        this.next = null
    }

}
let front = null, rear = null

function enqueue(data) {
    let temp = new Qnode(data)
    if(rear == null) {
        front = rear = temp
        return
    } 
        rear.next = temp
        rear = temp
    
}

function dequeue() {

    if(front == null) {
        console.log("The queue is empty")
    }

    let temp = front
    front = front.next
    console.log("The removed item is " + temp.data)

    if(front == null) {
        rear = null
    }   
}

function display() {
    if(front == null) {
        console.log("The queue is empty")
    } else 
    {
        var current = front
        var str = ""
        while(current) {
            str+= current.data + " "
            current = current.next
        }
        console.log(str)
    }
    
}


enqueue(1)
enqueue(3)
enqueue(5)
enqueue(8)
enqueue(12)
enqueue(15)
enqueue(18)
display()

dequeue()
dequeue()
display()


console.log("front item is " + front.data)
console.log("The last node is " + rear.data)