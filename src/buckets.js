export default class Buckets {
  #slots = [];

  constructor(capacity) {
    for (let i = 0; i < capacity; i += 1) {
      this.#slots.push({});
    }
  }

  getSlot(index) {
    if (index < 0 || index >= this.#slots.length)
      throw new Error('Trying to access index out of bounds');
    return this.#slots[index];
  }

  get(index, key) {
    return this.#slots[index][key] || null;
  }

  set(index, key, value) {
    this.#slots[index][key] = value;
  }
}
