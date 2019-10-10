// TODO: Ok now make this do what it was supposed to do

import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  template: `
    <nb-card>
      <nb-card-header>{{ index }}</nb-card-header>
      <nb-card-body>
        {{ index }}
      </nb-card-body>
    </nb-card>
  `
})
export class EditComponent {
  @Input() index: number;

  constructor(protected ref: NbDialogRef<EditComponent>) {}
}
