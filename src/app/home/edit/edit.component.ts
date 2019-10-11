// TODO: Ok now make this do what it was supposed to do

import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { ShoppingListItem } from "src/app/shopping-list-item";
import { ShoppinglistitemsService } from "src/app/shoppinglistitems.service";

@Component({
  template: `
    <nb-card style="width: 500px">
      <nb-card-header>Edit Item</nb-card-header>
      <nb-card-body>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label class="label">Item Name</label>
              <input nbInput type="text" fullWidth [value]="item.name" />
            </div>
          </div>
        </div>
        <br />
        <div class="row" style="margin-bottom: 10px">
          <div class="col-sm-6">
            <div class="form-group">
              <label class="label">Item Quantity</label>
              <input nbInput type="text" fullWidth />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label class="label">Item Cost Each</label>
              <input nbInput type="text" fullWidth />
            </div>
          </div>
        </div>
      </nb-card-body>
      <nb-card-footer>
        <button nbButton status="primary" style="margin-right: 10px;">Save</button>
        <button nbButton status="warning">Cancel</button>
      </nb-card-footer>
    </nb-card>
  `
})
export class EditComponent {
  @Input() index: number;

  item: ShoppingListItem;

  constructor(
    protected ref: NbDialogRef<EditComponent>,
    private shoppinglistitemsService: ShoppinglistitemsService
  ) {
    this.item = shoppinglistitemsService.items[this.index];
  }
}
