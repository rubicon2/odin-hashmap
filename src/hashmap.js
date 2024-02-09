export default class Hashmap {
  #capacity = 16;

  #maxLoadFactor = 0.75;

  hash(key) {
    // A deep, deep rabbit hole...
    let hashCode = 0;

    const prime = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = prime * hashCode + key.charCodeAt(i);
      // As capacity expands, this will produce different results... ?
      // I guess the values are shifted around as the capacity expands
      hashCode %= this.#capacity;
    }

    return hashCode;
  }
}
