import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegatasComponent } from './regatas.component';

describe('RegatasComponent', () => {
  let component: RegatasComponent;
  let fixture: ComponentFixture<RegatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
