import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewClanComponent } from './add-new-clan.component';

describe('AddNewClanComponent', () => {
  let component: AddNewClanComponent;
  let fixture: ComponentFixture<AddNewClanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewClanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewClanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
