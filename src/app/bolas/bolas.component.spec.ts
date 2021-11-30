import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolasComponent } from './bolas.component';

describe('BolasComponent', () => {
  let component: BolasComponent;
  let fixture: ComponentFixture<BolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
