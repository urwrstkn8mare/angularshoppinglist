import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ShoppinglistitemsService } from "./shoppinglistitems.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NebularModule } from "./nebular.module";
import { NbThemeModule, NbDialogModule, NbDialogRef } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { EditComponent } from "./home/edit/edit.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HomeComponent, PagenotfoundComponent, EditComponent],
  imports: [
    NbThemeModule.forRoot({ name: "default" }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbEvaIconsModule,
    NbDialogModule.forRoot(),
    NebularModule,
    ReactiveFormsModule
  ],
  entryComponents: [EditComponent],
  providers: [ShoppinglistitemsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
