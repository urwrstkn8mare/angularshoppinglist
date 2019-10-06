import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagenotfound",
  template: `
    <p>Page not found</p>
    <a routerLink="/">go back home</a>
  `,
  styles: []
})
export class PagenotfoundComponent implements OnInit {
  constructor() {
    console.log("PagenotfoundComponent works");
  }

  ngOnInit() {}
}
