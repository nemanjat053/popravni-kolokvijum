import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewKnjigaComponent } from './add-new-knjiga.component';

describe('AddNewKnjigaComponent', () => {
  let component: AddNewKnjigaComponent;
  let fixture: ComponentFixture<AddNewKnjigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewKnjigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewKnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
