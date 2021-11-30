import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaquetasComponent } from './jaquetas.component';

describe('JaquetasComponent', () => {
  let component: JaquetasComponent;
  let fixture: ComponentFixture<JaquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaquetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
