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


    bfs(start){ //use shift function
           let queue = [start];

           let visited = new Set([start]);

           let results = [];

    while(queue.length){
        let curr = queue.shift();
        results.push(curr);
        for ( let neighbour of this.adjacencyList[curr]){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
     
    }
    return results;
    }


    
    dfs(start){ //use shift function
        let stack = [start];

        let visited = new Set([start]);

        let results = [];

 while(stack.length){
     let curr = stack.pop();
     results.push(curr);
     console.log(curr)
     for ( let neighbour of this.adjacencyList[curr]){
        console.log(neighbour);
        break;
         if(!visited.has(neighbour)){
             visited.add(neighbour);
             stack.push(neighbour);
         }
     }
  
 }
 return results;
 }
}


const graph = new Graph();

graph.addVertex("A");
graph.addVertex("C");
graph.addVertex("B");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "B");
graph.addEdge("D", "A");
graph.addEdge("D", "B");
graph.addEdge("D", "C");


// console.log(graph);

// graph.delEdge("A","C");
// console.log(graph);

console.log(graph.dfs("A"));
console.log(graph.bfs("A"));

