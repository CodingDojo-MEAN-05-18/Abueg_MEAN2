import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinGoldComponent } from './nin-gold.component';

describe('NinGoldComponent', () => {
  let component: NinGoldComponent;
  let fixture: ComponentFixture<NinGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
