import { NgModule } from "@angular/core";

import { NbLayoutModule, NbCardModule, NbListModule, NbButtonModule } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";

@NgModule({
  imports: [NbLayoutModule, NbEvaIconsModule, NbCardModule, NbListModule, NbButtonModule],
  exports: [NbLayoutModule, NbEvaIconsModule, NbCardModule, NbListModule, NbButtonModule]
})
export class NebularModule {}
