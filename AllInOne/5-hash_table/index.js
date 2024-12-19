class HashTable {
  constructor(size = 5) {
    // converting our data into array
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    // jei key provide kora hobe .. sheta ke hash kore return korbe ..
    let sum = 0; // store that hash value
    const PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96;
      // Incomplete
    }
  }
}
