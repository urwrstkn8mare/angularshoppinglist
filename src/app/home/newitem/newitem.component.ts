import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-newitem",
  templateUrl: "./newitem.component.html",
  styleUrls: ["./newitem.component.scss"]
})
export class NewitemComponent implements OnInit {
  @Output() toggle = new EventEmitter();

  constructor() {
    console.log("NewitemComponent works");
  }

  ngOnInit() {}

  toggleMethod() {
    this.toggle.emit();
  }
}
