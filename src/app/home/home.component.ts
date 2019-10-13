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
    private shoppinglistitemsservice: ShoppinglistitemsService,
    private dialogService: NbDialogService
  ) {
    console.log("HomeComponent works");
  }

  items: ShoppingListItem[];
  listItemHoverStates: boolean[] = [];
  showingCompleted: boolean;

  ngOnInit() {
    this.showingCompleted = false;

    this.items = this.shoppinglistitemsservice.items;
    for (const item of this.items) {
      this.listItemHoverStates.push(false);
    }
  }

  mouseEnterListItem(index: number) {
    this.listItemHoverStates[index] = true;
  }

  mouseLeaveListItem(index: number) {
    this.listItemHoverStates[index] = false;
  }

  // TODO: Whenever you click Edit it toggles bought. Fix it.
  openEditor(index: number) {
    this.toggleBought(index);

    this.dialogService.open(EditComponent, {
      context: { index, new: false }
    });
  }

  toggleShowingCompleted() {
    this.showingCompleted = !this.showingCompleted;
  }

  hideListItemQuestion(index: number): boolean {
    const itemBoughtState = this.shoppinglistitemsservice.items[index].bought;
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
    this.dialogService.open(EditComponent, {
      context: { new: true }
    });
  }

  toggleBought(index: number) {
    this.shoppinglistitemsservice.replaceItem(
      index,
      undefined,
      undefined,
      undefined,
      !this.items[index].bought
    );
  }
}
