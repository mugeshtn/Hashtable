class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
        }

        let temp = this.root;
        while(true){
            if(newNode.value === temp.value) return `value already present`;

            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
            else{
                if(temp.right === null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value){

        if(!this.root) return false;
        let temp = this.root;

        while(temp){
            if(value < temp.value){
                temp = temp.left;
            }else if(value > temp.value){
                temp = temp.right;
            }else{
                return true;
            }
        }
        return false;
    }

    Bfs(){
        let queue = [];
        let results = [];

     let node = this.root;
     queue.push(node);

     while(queue.length){
        node = queue.shift();
        results.push(node.value);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
     }
     return results;
    }


    DfsInorder(){
        let results = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            results.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }
    DfsPreorder(){
        let results = [];

        function traverse(node){
            results.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }
    DfsPostorder(){
        let results = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            results.push(node.value);
        }
        traverse(this.root);
        return results;
    }
}

const tree = new BST();

tree.insert(20);
tree.insert(22);
tree.insert(4);
tree.insert(10);
tree.insert(8);
tree.insert(12);
tree.insert(14);
tree.insert(25);

console.log(tree.Bfs());

