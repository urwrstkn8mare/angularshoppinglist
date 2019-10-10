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

  ngOnInit() {
    this.items = this.shoppinglistitemsservice.items;
    for (const item of this.items) {
      this.listItemHoverStates.push(false);
    }
  }

  mouseEnterListItem(index: number) {
    this.listItemHoverStates[index] = true;
    console.log(this.listItemHoverStates);
  }

  mouseLeaveListItem(index: number) {
    this.listItemHoverStates[index] = false;
    console.log(this.listItemHoverStates);
  }

  openEditor(index: number) {
    this.items[index].bought = !this.items[index].bought;
    this.dialogService.open(EditComponent, {
      context: {
        index
      }
    });
  }
}
