export class ShoppingListItem {
  bought: boolean;

  constructor(
    public name: string,
    public quantity: number,
    public costEach: number
  ) {
    this.bought = false;
  }

  get costTotal(): number {
    return this.quantity * this.costEach;
  }
}
