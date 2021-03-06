// TODO: Add validation

import { Component, Input, OnInit } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { ShoppingListItem } from "src/app/shopping-list-item";
import { ShoppinglistitemsService } from "src/app/shoppinglistitems.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  templateUrl: "./edit.component.html"
})
export class EditComponent implements OnInit {
  @Input() index?: number;
  @Input() new: boolean;

  myForm: FormGroup;

  item: ShoppingListItem;

  loading = true;

  removing: boolean;

  saving: boolean;

  constructor(
    protected ref: NbDialogRef<EditComponent>,
    private shoppinglistitemsService: ShoppinglistitemsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.saving = false;

    new Promise((resolve, reject) => {
      if (this.new) {
        this.shoppinglistitemsService.addItem(new ShoppingListItem("", 1, 0.0)).then(id => {
          this.shoppinglistitemsService.getIndex(id).then(index => {
            this.index = index;

            this.ref.onClose.subscribe(() => {
              if (!this.saving) {
                this.shoppinglistitemsService.removeItem(this.index);
                this.saving = false;
              }
            });

            resolve();
          });
        });
      } else {
        if (!this.index && this.index !== 0) {
          const err = new Error("The new parameter is false and no index was provided!");
          reject(err);
        }
        resolve();
      }
    })
      .then(() => {
        this.shoppinglistitemsService
          .itemsPromise()
          .then(array => {
            return array[this.index];
          })
          .then(item => {
            this.loading = false;
            this.myForm = this.fb.group({
              name: [item.name, [Validators.required]],
              quantity: [
                item.quantity,
                [Validators.required, Validators.pattern("^\\d+$"), Validators.min(1)]
              ],
              costEach: [
                item.costEach,
                [Validators.required, Validators.pattern("^\\$?\\d+(\\.\\d{1,2})?$")]
              ]
            });
          });
      })
      .catch(err => {
        throw err;
      });

    // this.item = this.shoppinglistitemsService.items[this.index];
    // this.myForm = this.fb.group({
    //   name: [this.item.name, [Validators.required]],
    //   quantity: [
    //     this.item.quantity,
    //     [Validators.required, Validators.pattern("^\\d+$"), Validators.min(1)]
    //   ],
    //   costEach: [this.item.costEach, [Validators.required, Validators.pattern("(\\d+\\.\\d{1,2})")]]
    // });
  }

  get formName() {
    return this.myForm.get("name");
  }

  get formQuantity() {
    return this.myForm.get("quantity");
  }

  get formCostEach() {
    return this.myForm.get("costEach");
  }

  save() {
    this.shoppinglistitemsService
      .replaceItem(
        this.index,
        this.formName.value,
        this.formQuantity.value,
        this.formCostEach.value
      )
      .then(() => {
        this.saving = true;
        this.ref.close();
      });
  }

  removeItem() {
    this.shoppinglistitemsService.removeItem(this.index).then(() => {
      this.ref.close({ removed: true });
    });
  }

  close() {
    this.ref.close();
  }
}
