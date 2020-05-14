import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewIznajmljivanjeComponent } from './add-new-iznajmljivanje.component';

describe('AddNewIznajmljivanjeComponent', () => {
  let component: AddNewIznajmljivanjeComponent;
  let fixture: ComponentFixture<AddNewIznajmljivanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewIznajmljivanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewIznajmljivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
