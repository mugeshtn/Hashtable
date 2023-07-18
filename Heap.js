class maxBinaryHeap{
    constructor(){
        this.values = new Array();
    }

    insert(value){

        this.values.push(value);

        // addValIndex refers index where the values added and gets changed;
        let addValIndex = this.values.length - 1;

        while(true){
            let parentIndex = Math.floor((addValIndex - 1)/2);

            if(!this.values[parentIndex]) break;

            if(this.values[parentIndex] >= this.values[addValIndex]) break;


            [this.values[parentIndex], this.values[addValIndex]] = [this.values[addValIndex], this.values[parentIndex]];

             addValIndex = parentIndex;
        }
        return this.values;
    }

    extractMax(){
        let lastindex = this.values.length - 1;

        [this.values[0], this.values[lastindex]] = [this.values[lastindex], this.values[0]];

        let largest = this.values.pop();

        let currIndex = 0;

        while(true){

          let lchildIndex = (currIndex * 2) + 1;
          let rchildIndex = (currIndex * 2) + 2;
//gValIndex refers greater value changing index;
          let gValIndex = currIndex; 


          if(lchildIndex < this.values.length){
            if(this.values[lchildIndex] > this.values[gValIndex]){
                gValIndex = lchildIndex; 
            }
          }



          if(rchildIndex < this.values.length){
            if(this.values[rchildIndex] > this.values[gValIndex]){
                gValIndex = rchildIndex;
            }
          }


          if(gValIndex === currIndex) break;

           [ this.values[gValIndex], this.values[currIndex]] = [this.values[currIndex], this.values[gValIndex]];

             currIndex = gValIndex ;

        }
        return largest;
    }
}





class minBinaryHeap{
    constructor(){
        this.values = new Array();
    }

    insert(value){

        this.values.push(value);

        // addValIndex refers index where the values added and gets changed;
        let addValIndex = this.values.length - 1;

        while(true){
            let parentIndex = Math.floor((addValIndex - 1)/2);

            if(!this.values[parentIndex]) break;

            if(this.values[parentIndex] <= this.values[addValIndex]) break;


            [this.values[parentIndex], this.values[addValIndex]] = [this.values[addValIndex], this.values[parentIndex]];

             addValIndex = parentIndex;
        }
        return this.values;
    }

    extractMin(){
        let lastindex = this.values.length - 1;

        [this.values[0], this.values[lastindex]] = [this.values[lastindex], this.values[0]];

        let Smallest = this.values.pop();

        let currIndex = 0;

        while(true){

          let lchildIndex = (currIndex * 2) + 1;
          let rchildIndex = (currIndex * 2) + 2;
//gValIndex refers greater value changing index;
          let lValIndex = currIndex; 


          if(lchildIndex < this.values.length){
            if(this.values[lchildIndex] > this.values[lValIndex]){
                lValIndex = lchildIndex; 
            }
          }



          if(rchildIndex < this.values.length){
            if(this.values[rchildIndex] > this.values[lValIndex]){
                lValIndex = rchildIndex;
            }
          }


          if(lValIndex === currIndex) break;

           [ this.values[lValIndex], this.values[currIndex]] = [this.values[currIndex], this.values[lValIndex]];

             currIndex = lValIndex ;

        }
        return Smallest;
    }
}

// const h = new minBinaryHeap();

// h.insert(20);
// h.insert(15);
// h.insert(25);
// h.insert(14);
// h.insert(16)
// h.insert(19);
// h.insert(24);
// h.insert(27);
// h.insert(29);
// h.insert(42);

// console.log(h.extractMin())


//making the array to max heap;
function heapify(arr, length, parentIndex){
   
    let gValIndex = parentIndex;
    let lchild = (parentIndex*2) + 1;
    let rchild = (parentIndex*2) + 2
   

    if(lchild < length && arr[lchild] > arr[gValIndex])gValIndex = lchild;

    
    if(rchild < length && arr[rchild] > arr[gValIndex])gValIndex = rchild;
  

    if(gValIndex !== parentIndex) {
    [arr[gValIndex], arr[parentIndex]] = [arr[parentIndex] ,arr[gValIndex]];
 
      heapify(arr, length, gValIndex);
    }
    return arr;
}
     


function heapSort(arr){
    let length = arr.length - 1 ;
    let lastParent = Math.floor((length - 1)/2);
    let lastChild = length  ;

    while(lastParent >= 0){
        heapify(arr, length, lastParent);
        lastParent --;
    }
    while(lastChild >= 0){
        [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
        heapify(arr, lastChild, 0);
        lastChild --;
    }
  return arr;
}


let arr = [12, 8, 5, 3, 9, 10];
console.log(heapSort(arr));
