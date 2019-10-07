import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ShoppinglistitemsService } from "./shoppinglistitems.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NebularModule } from "./nebular.module";
import { NbThemeModule } from "@nebular/theme";

@NgModule({
  declarations: [AppComponent, HomeComponent, PagenotfoundComponent],
  imports: [
    NbThemeModule.forRoot({ name: "default" }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NebularModule
  ],
  providers: [ShoppinglistitemsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
