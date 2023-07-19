class Graph{
    constructor(){
        this.adjacencyList = {};
    }

 fromEdgeList(edgeList){
    for(let [f,s] of edgeList){
        if(!this.adjacencyList[f]){
            this.adjacencyList[f] = [];
        }
        if(!this.adjacencyList[s]){
            this.adjacencyList[s] = [];
        }


        this.adjacencyList[f].push(s);
        this.adjacencyList[s].push(f);
    }
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

    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            //filtering all elements into vertex1 array except vertex 2;
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return `vertex absent`;


        //first we need to remove all edges connected to the vertex
       while(this.adjacencyList[vertex].length){
        let temp = this.adjacencyList[vertex].pop();

        this.removeEdge(vertex, temp);
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

// graph.removeEdge("A","C");
// console.log(graph);

console.log(graph.dfs("A"));
console.log(graph.bfs("A"));

