import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ShoppinglistitemsService } from "src/app/shoppinglistitems.service";
import { ShoppingListItem } from "src/app/shopping-list-item";

@Component({
  selector: "app-newitem",
  templateUrl: "./newitem.component.html",
  styleUrls: ["./newitem.component.scss"]
})
export class NewitemComponent implements OnInit {
  constructor(private items: ShoppinglistitemsService) {
    console.log("NewitemComponent works");
  }

  ngOnInit() {}

  addItem() {}
}

/*
       TODO: Get reactive forms with material forms working.
             Before trying to submit. At least just show it
             live just to make sure you can get the data.
*/
