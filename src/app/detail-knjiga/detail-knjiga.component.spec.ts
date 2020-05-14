import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKnjigaComponent } from './detail-knjiga.component';

describe('DetailKnjigaComponent', () => {
  let component: DetailKnjigaComponent;
  let fixture: ComponentFixture<DetailKnjigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailKnjigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
