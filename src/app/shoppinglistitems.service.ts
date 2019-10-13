import { Injectable } from "@angular/core";
import { ShoppingListItem } from "./shopping-list-item";

@Injectable({
  providedIn: "root"
})
export class ShoppinglistitemsService {
  constructor() {}

  private _items: ShoppingListItem[] = /* Just for testing: */ [
    new ShoppingListItem("Milk", 2, 5.0),
    new ShoppingListItem("Chocolate Bar", 5, 0.5),
    new ShoppingListItem("Cookies", 3, 2)
  ];

  get items(): ShoppingListItem[] {
    return this._items;
  }

  set items(value: ShoppingListItem[]) {
    this._items = value;
  }

  addItem(item: ShoppingListItem, index?: number): ShoppingListItem {
    if (index) {
      this._items.splice(index, 0, item);
    } else {
      this._items.push(item);
    }

    return item;
  }

  removeItem(index: number): ShoppingListItem {
    return this._items.splice(index, 1)[0];
  }

  clear(): ShoppingListItem[] {
    const arrayAboutToBeCleared = this._items;
    this._items = [];
    return arrayAboutToBeCleared;
  }

  changeIndex(oldIndex: number, newIndex: number): ShoppingListItem {
    const item = this._items.splice(oldIndex, 1)[0];
    this._items.splice(newIndex, 0, item);
    return item;
  }

  getIndex(name: string): number {
    return this._items.findIndex(item => (item.name === name ? true : false));
  }

  replaceItem(
    index: number,
    name?: string,
    quantity?: number,
    costEach?: number,
    bought?: boolean
  ) {
    const itemMemory = this.items[index];
    this.removeItem(index);
    this.addItem(
      new ShoppingListItem(
        name === undefined || name === null ? itemMemory.name : name,
        quantity === undefined || name === null ? itemMemory.quantity : quantity,
        costEach === undefined || name === null ? itemMemory.costEach : costEach,
        bought === undefined || name === null ? itemMemory.bought : bought
      )
    );
    this.changeIndex(this.getIndex(itemMemory.name), index);
  }
}
