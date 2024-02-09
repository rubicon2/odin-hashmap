export default class Bucket {
  #arr = [];

  constructor(items) {
    this.#arr = items;
  }

  get(index) {
    if (index < 0 || index >= this.#arr.length)
      throw new Error('Trying to access index out of bounds');
    return this.#arr[index];
  }
}
