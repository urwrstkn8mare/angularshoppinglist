import { Component, OnInit, ViewChild } from "@angular/core";
import { ShoppinglistitemsService } from "../shoppinglistitems.service";
import { ShoppingListItem } from "../shopping-list-item";
import { NbDialogService } from "@nebular/theme";
import { EditComponent } from "./edit/edit.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private shoppinglistitemsService: ShoppinglistitemsService,
    private dialogService: NbDialogService
  ) {
    console.log("HomeComponent works");
    this.items = this.shoppinglistitemsService.items;
    this.shoppinglistitemsService.collection.snapshotChanges().subscribe(array => {
      this.items = [];
      array.forEach(item => {
        this.items.push(
          this.shoppinglistitemsService.convertDoc(item.payload.doc.data(), item.payload.doc.id)
        );
      });
    });
  }

  items: ShoppingListItem[];
  listItemHoverStates: boolean[] = [];
  showingCompleted: boolean;

  ngOnInit() {
    this.showingCompleted = false;
    this.shoppinglistitemsService.itemsPromise().then(array => {
      this.items = array;
      for (const {} of this.items) {
        this.listItemHoverStates.push(false);
      }
    });
  }

  mouseEnterListItem(index: number) {
    this.listItemHoverStates[index] = true;
  }

  mouseLeaveListItem(index: number) {
    this.listItemHoverStates[index] = false;
  }

  // TODO: Whenever you click Edit it toggles bought. Fix it.
  openEditor(index: number) {
    this.listItemHoverStates[index] = false;
    this.dialogService
      .open(EditComponent, {
        context: {
          index,
          new: false
        }
      })
      .onClose.subscribe(() => {
        this.toggleBought(index);
      });
  }

  toggleShowingCompleted() {
    this.showingCompleted = !this.showingCompleted;
  }

  hideListItemQuestion(index: number): boolean {
    const itemBoughtState = this.items[index].bought;

    if (!itemBoughtState) {
      return false;
    } else {
      if (this.showingCompleted) {
        return false;
      } else {
        return true;
      }
    }
  }

  add() {
    this.dialogService.open(EditComponent, { context: { new: true } });
  }

  async toggleBought(index: number) {
    return this.shoppinglistitemsService.replaceItem(
      index,
      undefined,
      undefined,
      undefined,
      !this.items[index].bought
    );
  }
}
