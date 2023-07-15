class Node{
    constructor(value){
        this.value = value;
        this.isEnd = false;
        this.children = new Array(26);
    }
}

class Trie{
    constructor(){
        this.root = new Node('');
    }

insert(word){
   let temp = this.root;


   for(let i = 0; i < word.length ; i++){

    let charIndex = word.charCodeAt(i) - 97;

    if(!temp.children[charIndex]){
        temp.children[charIndex] = new Node(word[i]);
    }
    temp = temp.children[charIndex];
   }
   temp.isEnd = true;
}

getLastNode(word){

    if(word === '') return this.root;

    let temp = this.root;


    for(let i = 0; i < word.length; i++){
        let charIndex = word.charCodeAt(i) - 97;

        if(!temp.children[charIndex]){
            return null;
        }
        temp = temp.children[charIndex];
    }
    return temp;
}

search(word){
    let node = this.getLastNode(word);

    return (node && node.isEnd);
}

startsWith(word){
    let node = this.getLastNode(word);

    return !!node;
}


allWords(starting = ''){
    let startingNode = this.getLastNode(starting);

    let words = [];

    this.findAllWords(startingNode, starting, words);
    return words;
}

findAllWords(node, prefix , words){
 if(node){
    if(node.isEnd){
        words.push(prefix);
    }


    for(let i = 0; i < node.children.length; i++){
        if(node.children[i]){
            this.findAllWords(node.children[i], prefix + node.children[i].value, words);
        }
    }
 }
}
}

const t = new Trie();


t.insert("what");
t.insert("whatever");
t.insert("bat");
t.insert("ball");
t.insert("ant");

console.log(t.search("what"));
console.log(t.startsWith("ba"));
console.log(t.allWords());

