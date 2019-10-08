import { NgModule } from "@angular/core";

import {
  NbLayoutModule,
  NbCardModule,
  NbListModule,
  NbButtonModule,
  NbIconModule,
  NbCheckboxModule,
  NbInputModule
} from "@nebular/theme";

@NgModule({
  imports: [NbIconModule, NbLayoutModule, NbCardModule, NbListModule, NbButtonModule, NbCheckboxModule, NbInputModule],
  exports: [NbIconModule, NbLayoutModule, NbCardModule, NbListModule, NbButtonModule, NbCheckboxModule, NbInputModule]
})
export class NebularModule {}
