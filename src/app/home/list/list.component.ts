import { Component, OnInit } from "@angular/core";
import { ShoppinglistitemsService } from "../../shoppinglistitems.service";
import { ShoppingListItem } from "src/app/shopping-list-item";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  constructor(private shoppinglistitemsService: ShoppinglistitemsService) {}

  items: ShoppingListItem[];

  ngOnInit() {
    this.items = this.shoppinglistitemsService.items;
  }
}
