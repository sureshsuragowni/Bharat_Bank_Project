import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeuseridpwdComponent } from './changeuseridpwd.component';

describe('ChangeuseridpwdComponent', () => {
  let component: ChangeuseridpwdComponent;
  let fixture: ComponentFixture<ChangeuseridpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeuseridpwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeuseridpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
