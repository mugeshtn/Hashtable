class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(key, value){
        const newNode = new Node(key, value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    getVal(key){
        let temp = this.head;

        while(temp){
            if(temp.key === key){
                return temp.value;
            }
                temp = temp.next;  
        }

    }
        getKey(){
           
            let temp = this.head;
           if(this.length === 1) {
            return temp.key; 
           }
          else{
            let values = []
           while(temp){
            values.push(temp.key);
              temp = temp.next;
           }
            return values;
          }
          
        }
        
   
}


class HashTable{
    constructor(size = 7){
    this.datamap = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = ((hash + key.charCodeAt(i))*23) % this.datamap.length;
        }
        return hash;
    }

    set(key,value){
        let index = this._hash(key);

        if(!this.datamap[index]){
            this.datamap[index] = new LinkedList();
        }
        this.datamap[index].push(key,value);
    }

    get(key){
        let index = this._hash(key);
    if(this.datamap[index]){
       console.log( this.datamap[index].getVal(key));    
    }
     return undefined;
    }

    getKeys(){
              let allKeys = [], value;
            for(let i = 0 ; i < this.datamap.length; i++){
                if(this.datamap[i]){
                    allKeys.push(this.datamap[i].getKey());
                }
            }
    console.log(allKeys);
    }
    }

const h = new HashTable();
h.set("nails", 1500);
h.set("lumbars", 700);
h.set("washers", 100);
h.set("bolts", 5400);
h.getKeys();
h.get("lumbars");

