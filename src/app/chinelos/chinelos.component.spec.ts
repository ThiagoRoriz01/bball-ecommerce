import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chinelosomponent } from './chinelos.component';

describe('PCComponent', () => {
  let component: Chinelosomponent;
  let fixture: ComponentFixture<Chinelosomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chinelosomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chinelosomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
