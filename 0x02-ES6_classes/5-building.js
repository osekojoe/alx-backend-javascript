export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for the 'sqft' attribute
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    } else {
      throw new Error();
    }
  }

  // Abstract method to be implemented by subclasses
  /* eslint-disable-next-line class-methods-use-this */
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
