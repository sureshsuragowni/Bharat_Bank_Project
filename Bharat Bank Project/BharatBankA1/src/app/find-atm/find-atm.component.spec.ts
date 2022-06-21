import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAtmComponent } from './find-atm.component';

describe('FindAtmComponent', () => {
  let component: FindAtmComponent;
  let fixture: ComponentFixture<FindAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAtmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
