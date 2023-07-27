export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for the 'size' attribute
  get size() {
    return this._size;
  }

  // Getter for the 'location' attribute
  get location() {
    return this._location;
  }

  // Casting the class into a Number will return the size
  valueOf() {
    return this._size;
  }

  // Casting the class into a String will return the location
  toString() {
    return this._location;
  }
}
