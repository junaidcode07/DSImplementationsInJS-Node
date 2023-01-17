class Queue {
    constructor(c) {
        this.front = this.rear = 0
        this.capacity = c
        this.queue = [new Array(c)]
    }

    enque(data) {
        if (this.capacity === this.rear) {
            console.log("the Queue is full")
            return
        }
        else {
            this.queue[this.rear] = data
            this.rear++
        }
        return
    }

    dequeue() {
        if (this.front === this.rear) {
            console.log("The queue is empty")
            return
        }

        else 
        {
            for (let i = 0; i < this.rear - 1; i++) {
                this.queue[i] = this.queue[i + 1]
            }
            if (this.rear < this.capacity) 
                this.queue[this.rear] = 0
                this.rear--
        }
        return
    }
    queueDisplay() {
        if (this.front == this.rear) {
            return console.log("The queue is empty")
        } else {
            for (let i = this.front; i < this.rear; i++) {
                console.log(this.queue[i])
            }
            return
        }
    }

    queueFront() {
        if (this.front == this.rear) {
            console.log("The queue is empty")
        }
        console.log("Front Element is " + this.queue[this.front])
        return 
    }
}

let q = new Queue(4)
q.queueDisplay()
q.enque(4)
q.enque(10)
q.enque(12)
q.enque(18)
q.queueDisplay()
console.log("Deletion after two nodes")
q.dequeue()
q.dequeue()
q.queueDisplay()
q.queueFront()