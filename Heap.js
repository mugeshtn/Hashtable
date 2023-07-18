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


const h = new maxBinaryHeap();

h.insert(20);
h.insert(15);
h.insert(25);
h.insert(14);
h.insert(16)
h.insert(19);
h.insert(24);
h.insert(27);
h.insert(29);
h.insert(42);

console.log(h.extractMax())