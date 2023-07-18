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


    //inserting the value to the tree:
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



//Return whether the tree contains the given value:
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

// Find the min value:
    min(node){
     if(!node.left) return node;
     else{
        return this.min(node.left);
     }
    }


    // Remove a node from the BST.
    remove(value) {
     this._removeItem(this.root, value);
    }
    
    _removeItem(node, value) {
        if (!node) return null;

        if (value < node.value) {

            node.left = this._removeItem(node.left, value);
        }
      
        else if (value > node.value) {
           
            node.right = this._removeItem(node.right, value);
        }
       
        else {
           
            if (!node.left && !node.right) return node;

        
            if (node.left && !node.right) {
                return node.left;
            } else if (node.right && !node.left) {
                return node.right;
            }

            let minRight = this.min(node.right);

            node.value = minRight.value;

            node.right = this._removeItem(node.right, minRight.value);
 
        }
        return node;

    }


    //Breadth First Search
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

//Depth First search

//inorder - lowest to the highest:
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

    //preorder - left - right - middle;
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
    findDepth(node) {
      
        if (node) {
           
            let leftDepth = this.findDepth(node.left);
             
            let rightDepth = this.findDepth(node.right);
              
            return Math.max(leftDepth, rightDepth) + 1;

        }     
    return 0;
    }

    validation(){
        function isBST(node, min, max){
            if(node === null)return true;

            if(node.value <= min || node.value >= max) return false;


            return(isBST(node.left, min, node.value) && isBST(node.right, node.value, max));
        }

        return isBST(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }

}

const tree = new BST();

tree.insert(20);
tree.insert(15);
tree.insert(25);
tree.insert(14);
tree.insert(16)
tree.insert(19);
tree.insert(24);
tree.insert(27);
tree.insert(29);
tree.insert(42);
console.log(tree.validation())

// console.log(tree.DfsPostorder());
console.log(tree.findDepth(tree.root));