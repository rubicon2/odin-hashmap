import Buckets from './buckets';

export default class Hashmap {
  #capacity = 16;

  #maxLoadFactor = 0.75;

  #buckets = new Buckets(this.#capacity);

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

  set(key, value) {
    // If loadFactor has been reached, expand capacity and rearrange buckets
    // loadFactor = number of 'entries' (I assume this means values? Or is it keys?) in hashmap / number of buckets.
    // If key exists, update value
    this.#buckets.set(this.hash(key), key, value);
  }

  get(key) {
    return this.#buckets.get(this.hash(key), key);
  }
}
