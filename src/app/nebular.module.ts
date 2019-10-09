import { NgModule } from "@angular/core";

import {
  NbLayoutModule,
  NbCardModule,
  NbListModule,
  NbCheckboxModule,
  NbButtonModule,
  NbInputModule,
  NbIconModule
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
    NbIconModule
  ]
})
export class NebularModule {}
