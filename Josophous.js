class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}
   function getJosephusPosition(m,n) {
        var head = new Node(1)
        var prev = head
        for(let i = 2; i <= n; i++) {
            prev.next = new Node(i)
            prev = prev.next
        }

        prev.next = head

        var pointer1 = head, pointer2 = head
        while(pointer1 != pointer1.next) {
            var count = 1
            while(count != m) {
                pointer2 = pointer1
                pointer1 = pointer1.next
                count++
            }
            pointer2.next = pointer1.next
            pointer1 = pointer2.next
        }
        console.log("Last man standing is at the position " + pointer1.data)
    }
    getJosephusPosition(2,3)
