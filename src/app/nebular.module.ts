import { NgModule } from "@angular/core";

import { NbLayoutModule, NbCardModule, NbListModule, NbCheckboxModule } from "@nebular/theme";

@NgModule({
  imports: [NbLayoutModule, NbCardModule, NbListModule, NbCheckboxModule],
  exports: [NbLayoutModule, NbCardModule, NbListModule, NbCheckboxModule]
})
export class NebularModule {}
