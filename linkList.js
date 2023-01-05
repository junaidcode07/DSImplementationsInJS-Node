class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(element) {
        var node = new Node(element)
        var current
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return console.log("Please enter the correct index")
        } else {
            var node = new Node(element)
            var pointer, prev
            pointer = this.head

            if (index == 0) {
                node.next = this.head
                this.head = node
            } else {
                pointer = this.head
                var iterate = 0
                while (iterate < index) {
                    iterate++
                    prev = pointer
                    pointer = pointer.next
                }

                node.next = pointer
                prev.next = node
            }

            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return console.log("Please enter the correct index")
        } else {
            var current, prev, iteration = 0
            current = this.head
            prev = current

            if (index == 0) {
                this.head = current.next
            } else {
                while (iteration < index) {
                    iteration++
                    prev = current
                    current = current.next
                }
                prev.next = current.next
                this.size--
            }
            return current.elem

        }

    }

    removeElement(element) {
        var current = this.head
        var prev = null
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next
                } else {
                    prev.next = current.next
                }
                this.size--
                return current.element
            }
            prev = current
            current = current.next
        }

        return -1
    }


    indexOfElement(element) {
        let current = this.head
        let count = 0
        while(current != null) {
            if(current.element === element) 
                return count 
                count++
                current = current.next
        }
        return -1
    }

   
    size_of_list() {
        return this.size
    }

    
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

var object = new LinkedList()
object.add(10)
object.add(12)
object.add(5)
object.add(7)
object.add(9)
object.insertAt(15, 2)
object.insertAt(10, 1)
object.insertAt(23, 2)
object.insertAt(45, 3)
object.insertAt(96, 4)
object.insertAt(45, 5)
object.removeFrom(4)
object.removeElement(45)
console.log("Your provided element is available at the index of "+ object.indexOfElement(100))
object.printList()
console.log(object.size_of_list())