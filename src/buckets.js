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

  remove(index, key) {
    if (this.get(index, key)) {
      delete this.#slots[index][key];
      return true;
    }
    // If key was not in slots
    return false;
  }

  length() {
    let keyCount = 0;
    for (let i = 0; i < this.#slots.length; i += 1) {
      keyCount += Object.keys(this.#slots[i]).length;
    }
    return keyCount;
  }

  entries() {
    const allEntries = [];
    for (let i = 0; i < this.#slots.length; i += 1) {
      const slot = this.#slots[i];
      allEntries.push(...Object.entries(slot));
    }
    return allEntries;
  }

  keys() {
    const allKeys = [];
    for (let i = 0; i < this.#slots.length; i += 1) {
      const slot = this.#slots[i];
      allKeys.push(...Object.keys(slot));
    }
    return allKeys;
  }

  values() {
    const allValues = [];
    for (let i = 0; i < this.#slots.length; i += 1) {
      const slot = this.#slots[i];
      allValues.push(...Object.values(slot));
    }
    return allValues;
  }
}
