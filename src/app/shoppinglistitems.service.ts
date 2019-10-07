import { Injectable } from "@angular/core";
import { ShoppingListItem } from "./shopping-list-item";

@Injectable({
  providedIn: "root"
})
export class ShoppinglistitemsService {
  constructor() {}

  // tslint:disable-next-line: variable-name
  private _items: ShoppingListItem[] = /* Just for testing: */ [
    new ShoppingListItem("Milk", 2, 5.0),
    new ShoppingListItem("Chocolate Bar", 5, 0.5),
    new ShoppingListItem("Cookies", 3, 2)
  ];

  addItem(item: ShoppingListItem, index?: number): ShoppingListItem {
    if (index) {
      this._items.splice(index, 0, item);
    } else {
      this._items.push(item);
    }

    return item;
  }

  get items(): ShoppingListItem[] {
    return this._items;
  }

  set items(value: ShoppingListItem[]) {
    this._items = value;
  }

  removeItem(index: number): ShoppingListItem {
    return this._items.splice(index, 1)[0];
  }

  clear(): ShoppingListItem[] {
    const arrayAboutToBeCleared = this._items;
    this._items = [];
    return arrayAboutToBeCleared;
  }

  changeIndex(firstIndex: number, secondIndex: number): ShoppingListItem {
    const item = this._items.splice(firstIndex, 1)[0];
    this._items.splice(secondIndex, 0, item);
    return item;
  }

  getIndex(name: string): number {
    return this._items.findIndex(item => (item.name === name ? true : false));
  }
}
