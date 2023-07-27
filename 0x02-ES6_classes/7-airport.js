export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      this._name = newName;
    } else {
      throw new Error();
    }
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      this._name = newCode;
    } else {
      throw new Error();
    }
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
