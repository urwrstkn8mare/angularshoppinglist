// TODO: Stop making this act weird

import { Component, Input, OnInit } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { ShoppingListItem } from "src/app/shopping-list-item";
import { ShoppinglistitemsService } from "src/app/shoppinglistitems.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  template: `
    <nb-card style="width: 500px">
      <nb-card-header>Edit Item</nb-card-header>
      <nb-card-body>
        <h3>
          Value: {{ "test value" }}
          <br />
          Index: {{ index }}
        </h3>
        <hr />
        <form [formGroup]="myForm">
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label class="label">Item Name</label>
                <input nbInput type="text" fullWidth formControlName="name" />
              </div>
            </div>
          </div>
          <br />
          <div class="row" style="margin-bottom: 10px">
            <div class="col-sm-6">
              <div class="form-group">
                <label class="label">Item Quantity</label>
                <input nbInput type="text" fullWidth formControlName="quantity" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label class="label">Item Cost Each</label>
                <input nbInput type="text" fullWidth formControlName="costEach" />
              </div>
            </div>
          </div>
        </form>
      </nb-card-body>
      <nb-card-footer>
        <button nbButton status="primary" style="margin-right: 10px;">Save</button>
        <button nbButton status="warning">Cancel</button>
      </nb-card-footer>
    </nb-card>
  `
})
export class EditComponent implements OnInit {
  @Input() index: number;

  item: ShoppingListItem;

  myForm: FormGroup;

  constructor(
    protected ref: NbDialogRef<EditComponent>,
    private shoppinglistitemsService: ShoppinglistitemsService,
    private fb: FormBuilder
  ) {
    console.log(this.index);

    // this.item = shoppinglistitemsService.items[this.index];

    // this.myForm = this.fb.group({
    //   name: this.item.name,
    //   quantity: this.item.quantity,
    //   costEach: this.item.costEach
    // });

    // this.myForm.valueChanges.subscribe(console.log);
  }

  ngOnInit() {}
}
