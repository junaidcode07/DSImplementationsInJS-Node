class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

class Graph {
    constructor(vertices) {
        this.vertices = vertices
        this.list = new Map()
    }

    addVertex(vertx) {
        let array = []
        this.list.set(vertx, array)

    }
    addEdge(source, destination) {
        this.list.get(source).push(destination)
        this.list.get(destination).push(source)
    }
    printGraph() {
        var keys = this.list.keys()
        console.log("these are the keys ", keys)
        for (var i of keys) {
            var get_values = this.list.get(i)
            var conc = ""

            for (var j of get_values) {
                conc += j + " "
            }
            console.log(i + " -> " + conc)
        }


    }

    breadthFirstSearch(startingNode) {
        var visited = []
        var queue = new Queue(this.vertices)
        visited[startingNode] = true
        queue.enqueue(startingNode)

        while (!queue.isEmpty()) {
            var getQueueElement = queue.dequeue()

            console.log(getQueueElement)
            var get_list = this.list.get(getQueueElement)


            for (var i in get_list) {
                var neigh = get_list[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    queue.enqueue(neigh);
                }
            }
        }
    }


    depthFirstSearch(startingNode) {
        var visitedNode = []
        this.DFS(startingNode, visitedNode)
    }

    DFS(startingNode, visited) {
        visited[startingNode] = true
        console.log(startingNode)

        var getAdjacentNodes = this.list.get(startingNode)
        for(var i in getAdjacentNodes) {
            var getElements = getAdjacentNodes[i]
            if(!visited[getElements]) {
                this.DFS(getElements, visited)
            }
        }
    
    }
}

var graph = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (var i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

// adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
graph.printGraph()
console.log("Bradth First Traversal is shown below")
graph.breadthFirstSearch('A')

console.log("Depth Frist Traversal is shown below")
graph.depthFirstSearch('A')