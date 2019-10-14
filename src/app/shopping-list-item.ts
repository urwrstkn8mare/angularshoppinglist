export class ShoppingListItem {
  constructor(
    private _name: string,
    private _quantity: number,
    private _costEach: number,
    private _bought?: boolean,
    private _id?: string
  ) {
    if (!_bought) {
      this._bought = false;
    }
  }

  get id() {
    if (this._id) {
      return this._id;
    } else {
      return undefined;
    }
  }

  get costTotal(): number {
    return this.quantity * this.costEach;
  }

  get bought() {
    return this._bought;
  }
  get name() {
    return this._name;
  }
  get quantity() {
    return this._quantity;
  }
  get costEach() {
    return this._costEach;
  }
}
