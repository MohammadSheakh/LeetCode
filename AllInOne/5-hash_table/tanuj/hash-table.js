class HashTable{
    constructor(size = 50) {
        this.table = [];
        this.size = size;
    }
    _hash(key, max){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % max;
    }

    set(key, value){
        // let's find the index where we want to store the key-value pair
        const index = this._hash(key, this.size);

        // check for collision
        if(this.table[index] === undefined){
            this.table[index] = [[key, value]];
            
        }else{
            let inserted = false;
            // check if same key is aleady present in the table 
            // if same key we just update the value .. 
            for(let i=0; i<this.table[index].length; i++){
                if(this.table[index][i][0] === key){ // 0 is the key
                    this.table[index][i][1] = value; // 1 is the value 
                    inserted = true;
                }
            }
            if(!inserted){
                this.table[index].push([key, value]);
            }
        }
    }
}

const hashTable = new HashTable(50);

hashTable.set("name", "Tanuj");
hashTable.set("age", 21);
hashTable.set("place", "India");
hashTable.set("name", "Sheakh");

console.log(hashTable);
    
// ⌛ 13:11  https://www.youtube.com/watch?v=mpuLhbumqsg
