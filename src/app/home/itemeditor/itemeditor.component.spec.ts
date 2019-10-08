import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemeditorComponent } from './itemeditor.component';

describe('ItemeditorComponent', () => {
  let component: ItemeditorComponent;
  let fixture: ComponentFixture<ItemeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
