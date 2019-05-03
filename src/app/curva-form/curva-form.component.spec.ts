import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvaFormComponent } from './curva-form.component';

describe('CurvaFormComponent', () => {
  let component: CurvaFormComponent;
  let fixture: ComponentFixture<CurvaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurvaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
