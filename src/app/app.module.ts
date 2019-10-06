import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { NewitemComponent } from "./home/newitem/newitem.component";
import { ListComponent } from "./home/list/list.component";
import { ShoppinglistitemsService } from "./shoppinglistitems.service";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    NewitemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ShoppinglistitemsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
