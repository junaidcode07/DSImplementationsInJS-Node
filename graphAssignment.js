class Graph {
    constructor() {
        this.adjacent = {}
        this.vertices = []
        this.edges = 0

    }
    addVertex(vertex) {
        this.vertices.push(vertex)
        this.adjacent[vertex] = []
    }

    addEdge(source, destination) {
        this.adjacent[source].push(destination)
        this.adjacent[destination].push(source)
        this.edges++
    }

    printGraph() {
        let keys = Object.keys(this.adjacent)
        for (let item of keys) {
            var get_Values = Object(this.adjacent[item])
            var conc = ""

            for (var values of get_Values) {
                conc += values + " "
            }
            console.log(item + " -> " + conc)
        }
    }

    breadthFirstSearchForAVertex(goal, root = this.vertices[0]) {
        let adjacent = this.adjacent

        const queue = []
        queue.push(root)

        const discovered = []
        discovered[root] = true

        while (queue.length) {
            let visited = queue.shift()
            //console.log(visited)

            if (visited === goal) {
                return true
            }

            for (let i = 0; i < adjacent[visited].length; i++) {
                if (!discovered[adjacent[visited][i]]) {
                    discovered[adjacent[visited][i]] = true
                    queue.push(adjacent[visited][i])
                }

            }
        }
        return false
    }

    depthFirstSearchForAVertex(goal, vertex = this.vertices[0], discovered = []) {
        let adjacent = this.adjacent

        //console.log(vertex)
        discovered[vertex] = true

        for(let i = 0; i < adjacent[vertex].length; i++) {
            let w = adjacent[vertex][i] 

            if(!discovered[w]) {
                this.depthFirstSearchForAVertex(goal, w, discovered)
            }
        }
        return discovered[goal] || false

    }

    bFSTraversal(root) {
        let adjacent = this.adjacent

        const queue = []
        queue.push(root)

        const discovered = []
        discovered[root] = true

        while (queue.length) {
            let visited = queue.shift()
            console.log(visited)

            for (let i = 0; i < adjacent[visited].length; i++) {
                if (!discovered[adjacent[visited][i]]) {
                    discovered[adjacent[visited][i]] = true
                    queue.push(adjacent[visited][i])
                }

            }
        }
    }
}

const graph = new Graph()
var vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

for (var i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "D")
graph.addEdge("B", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "F")
graph.addEdge("F", "G")
console.log(graph.breadthFirstSearchForAVertex("G"))
//console.log("The item you are looking for returns " + graph.breadthFirstSearchForAVertex("G"))
graph.printGraph()

console.log("There are " + graph.edges + " edges in this graph as it is undirected one.");
graph.bFSTraversal("A")
console.log("There is Depth First Search")
console.log(graph.depthFirstSearchForAVertex("G"))