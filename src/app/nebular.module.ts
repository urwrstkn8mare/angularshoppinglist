import { NgModule } from "@angular/core";

import {
  NbLayoutModule,
  NbCardModule,
  NbListModule,
  NbCheckboxModule,
  NbButtonModule,
  NbInputModule,
  NbIconModule,
  NbTreeGridModule
} from "@nebular/theme";

@NgModule({
  imports: [
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule
  ],
  exports: [
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbTreeGridModule
  ]
})
export class NebularModule {}
