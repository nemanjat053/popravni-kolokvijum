import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClanComponent } from './detail-clan.component';

describe('DetailClanComponent', () => {
  let component: DetailClanComponent;
  let fixture: ComponentFixture<DetailClanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
