import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIznajmljivanjeComponent } from './detail-iznajmljivanje.component';

describe('DetailIznajmljivanjeComponent', () => {
  let component: DetailIznajmljivanjeComponent;
  let fixture: ComponentFixture<DetailIznajmljivanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailIznajmljivanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIznajmljivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
