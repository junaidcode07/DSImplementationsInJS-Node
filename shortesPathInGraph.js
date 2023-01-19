class Graph {
    constructor() {
        this.adjacent = {}
        this.vertices = []
    }

    addVertex(vertex) {
        this.vertices.push(vertex)
        this.adjacent[vertex] = []
    }

    addEdge(source, destination) {
        this.adjacent[source].push(destination)
        this.adjacent[destination].push(source)
    }

    printGraph() {
        let keys = Object.keys(this.adjacent)
        for (var key of keys) {
            let concatinate = ""
            let get_values = Object(this.adjacent[key])

            for (var item of get_values) {
                concatinate += item + " "
            }
            console.log(key + " -> " + concatinate)
        }
    }

    breadthFirstSearch(goal, startingNode = this.vertices[0]) {
        let adjacent = this.adjacent
        let queue = []
        queue.push(startingNode)

        let discovered = []
        discovered[startingNode] = true

        let edges = []
        edges[startingNode] = 0

        const predecessor = []
        predecessor[startingNode] = null

        const builtPath = (goal, startingNode, predecessor) => {

            const stack = []
            stack.push(goal)

            let u = predecessor[goal]
            while (u != startingNode) {
                stack.push(u)
                u = predecessor[u]
            }

            stack.push(startingNode)
            let path = stack.reverse().join('-')
            return path

        }

        while (queue.length) {
            let visited = queue.shift()
            console.log(visited)

            if (visited === goal) {
                return {
                    distance : edges[goal],
                    path : builtPath(goal, startingNode, predecessor)
                }
            }

                for (let i = 0; i < adjacent[visited].length; i++) {
                    if (!discovered[adjacent[visited][i]]) {
                        discovered[adjacent[visited][i]] = true
                        queue.push(adjacent[visited][i])
                        edges[adjacent[visited][i]] = edges[visited] + 1

                        predecessor[adjacent[visited][i]] = visited

                    }
                }
            }
            return false
        }
    }
    const graph = new Graph()
let vertices = ["A", "B", "C", "D", "E", "F", "G"]

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i])
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

console.log(graph.breadthFirstSearch("G", "A"))
//graph.printGraph()

