class Graph{
    constructor(){
        this.adjacencyList = {};
    }


    addVertex(vertex){

        // creating an array inside the object with the vertex name { A : []; B : []}
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2){

        //connecting edges by adding values { A : ["B"], B : ["A"]}
         if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
         }
         return false;
    }

    delEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            //filtering all elements into vertex1 array except vertex 2;
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
            return true;
        }
        return false;
    }

    delVertex(vertex){
        if(!this.adjacencyList[vertex]) return `vertex absent`;


        //first we need to remove all edges connected to the vertex
       while(this.adjacencyList[vertex].length){
        let temp = this.adjacencyList[vertex].pop();

        this.delEdge(vertex, temp);
       }
       //Deleting the vertex;
       delete this.adjacencyList[vertex];
       return this;
    }
}


const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "B");

console.log(graph);

// graph.delEdge("A","C");
// console.log(graph);


graph.delVertex("C");
console.log(graph);

