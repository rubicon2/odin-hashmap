import Buckets from './buckets';

const DEFAULT_CAPACITY = 16;

export default class Hashmap {
  #capacity = DEFAULT_CAPACITY;

  #maxLoadFactor = 0.75;

  #buckets = new Buckets(this.#capacity);

  #increaseCapacity() {
    this.#capacity *= 2;
    const newBuckets = new Buckets(this.#capacity);

    const keys = this.keys();
    const values = this.values();

    for (let i = 0; i < keys.length; i += 1) {
      const hashcode = this.hash(keys[i]);
      newBuckets.set(hashcode, keys[i], values[i]);
    }

    this.#buckets = newBuckets;
  }

  hash(key) {
    let hashCode = 0;
    const prime = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = prime * hashCode + key.charCodeAt(i);
      hashCode %= this.#capacity;
    }
    return hashCode;
  }

  set(key, value) {
    // If loadFactor has been reached, expand capacity and rearrange buckets
    if (this.length() / this.#capacity >= this.#maxLoadFactor) {
      this.#increaseCapacity();
    }
    // If key exists, update value
    this.#buckets.set(this.hash(key), key, value);
  }

  get(key) {
    return this.#buckets.get(this.hash(key), key);
  }

  has(key) {
    // I don't see why eslint thinks the use of boolean literals is 'unnecessary'.
    /* eslint-disable no-unneeded-ternary */
    return this.get(key) ? true : false;
  }

  remove(key) {
    this.#buckets.remove(this.hash(key), key);
  }

  clear() {
    this.#capacity = DEFAULT_CAPACITY;
    this.#buckets = new Buckets(this.#capacity);
  }

  length() {
    return this.#buckets.length();
  }

  entries() {
    return this.#buckets.entries();
  }

  keys() {
    return this.#buckets.keys();
  }

  values() {
    return this.#buckets.values();
  }
}
