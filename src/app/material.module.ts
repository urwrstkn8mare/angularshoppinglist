import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

@NgModule({
  imports: [MatCardModule, MatListModule, MatFormFieldModule, MatInputModule],
  exports: [MatCardModule, MatListModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {}
