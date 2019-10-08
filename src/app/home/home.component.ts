import { Component, OnInit } from "@angular/core";
import { ShoppinglistitemsService } from "../shoppinglistitems.service";
import { ShoppingListItem } from "../shopping-list-item";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private shoppinglistitemsservice: ShoppinglistitemsService) {
    console.log("HomeComponent works");
  }

  items: ShoppingListItem[];
  // disableEditing: boolean;

  ngOnInit() {
    this.items = this.shoppinglistitemsservice.items;
    // this.disableEditing = true;
  }
}
