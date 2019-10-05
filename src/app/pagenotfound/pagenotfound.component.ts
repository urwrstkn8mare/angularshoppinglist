import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagenotfound",
  template: `
    <div class="testing-only">Pagenotfound Component is showing</div>
    <p>Page not found</p>
    <a routerLink="/">go back home</a>
  `,
  styles: []
})
export class PagenotfoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
