import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvaDetailComponent } from './curva-detail.component';

describe('CurvaDetailComponent', () => {
  let component: CurvaDetailComponent;
  let fixture: ComponentFixture<CurvaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurvaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
