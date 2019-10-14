import { Injectable } from "@angular/core";
import { ShoppingListItem } from "./shopping-list-item";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ShoppinglistitemsService {
  collection;

  constructor(public db: AngularFirestore) {
    this.collection = this.db.collection("shoppinglist");
  }

  convertDoc(data, id): ShoppingListItem {
    return new ShoppingListItem(data.name, data.quantity, data.costEach, data.bought, id);
  }

  async itemsPromise() {
    return await this.collection
      .get()
      .toPromise()
      .then(querySnapshot => {
        const items: ShoppingListItem[] = [];
        querySnapshot.forEach(doc => {
          items.push(this.convertDoc(doc.data(), doc.id));
        });
        return items;
      });
  }

  removeItem(index: number) {
    // return this._items.splice(index, 1)[0];
    this.itemsPromise().then(array => {
      this.collection
        .doc(array[index].id)
        .delete()
        .then(() => {
          console.log(array[index].id + " successfully deleted!");
        })
        .catch(err => {
          throw err;
        });
    });
  }

  addItem(item: ShoppingListItem) {
    // if (index) {
    //   this._items.splice(index, 0, item);
    // } else {
    //   this._items.push(item);
    // }

    // return item;

    return this.collection
      .add({
        name: item.name,
        quantity: item.quantity,
        costEach: item.costEach,
        bought: item.bought
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(err => {
        throw err;
      });
  }

  async clear() {
    let arrayAboutToBeClearedPromise: Promise<ShoppingListItem[]>;
    this.itemsPromise().then(array => {
      arrayAboutToBeClearedPromise = this.itemsPromise();
      array.forEach((item, index) => {
        this.removeItem(index);
      });
    });
    return await arrayAboutToBeClearedPromise;
  }

  set items(value: ShoppingListItem[]) {
    // this._items = value;

    this.clear();

    value.forEach(item => {
      this.addItem(item);
    });
  }

  changeIndex(oldIndex: number, newIndex: number) {
    this.itemsPromise().then(array => {
      const arrayItem = array.splice(oldIndex, 1)[0];
      array.splice(newIndex, 0, arrayItem);
      this.items = array;
    });

    // const item = this._items.splice(oldIndex, 1)[0];
    // this._items.splice(newIndex, 0, item);
    // return item;
  }

  async getIndex(name: string) {
    return await this.itemsPromise().then(array => {
      const matching: number[] = [];

      array.forEach((item, index) => {
        if (item.name === name) {
          matching.push(index);
        }
      });

      if (matching.length > 1) {
        throw Error("There is more than one item that matches with the name: '" + name + "'!");
      } else if (matching.length === 0) {
        throw Error("There is no item that matches with the name: '" + name + "'!");
      } else {
        return matching[0];
      }
    });

    // return this._items.findIndex(item => (item.name === name ? true : false));
  }

  async replaceItem(
    index: number,
    name?: string,
    quantity?: number,
    costEach?: number,
    bought?: boolean
  ) {
    // const itemMemory = this.items[index];

    return await this.itemsPromise().then(items => {
      const itemMemory = items[index];
      this.collection.doc(items[index].id).set({
        name: name === undefined || name === null ? itemMemory.name : name,
        quantity: quantity === undefined || name === null ? itemMemory.quantity : quantity,
        costEach: costEach === undefined || name === null ? itemMemory.costEach : costEach,
        bought: bought === undefined || name === null ? itemMemory.bought : bought
      });
    });

    // this.removeItem(index);
    // this.addItem(
    //   new ShoppingListItem(
    //     name === undefined || name === null ? itemMemory.name : name,
    //     quantity === undefined || name === null ? itemMemory.quantity : quantity,
    //     costEach === undefined || name === null ? itemMemory.costEach : costEach,
    //     bought === undefined || name === null ? itemMemory.bought : bought
    //   )
    // );
    // this.changeIndex(this.getIndex(itemMemory.name), index);
  }
}
