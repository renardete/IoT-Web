import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvaHomeComponent } from './curva-home.component';

describe('CurvaHomeComponent', () => {
  let component: CurvaHomeComponent;
  let fixture: ComponentFixture<CurvaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurvaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
