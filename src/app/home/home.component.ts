import { Component, OnInit } from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  constructor() {
    console.log("HomeComponent works");
  }

  newItemShown = false;

  toggleNewItem() {
    this.newItemShown = !this.newItemShown;
  }
}
