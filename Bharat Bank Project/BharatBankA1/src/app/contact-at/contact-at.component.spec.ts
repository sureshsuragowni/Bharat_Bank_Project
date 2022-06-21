import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAtComponent } from './contact-at.component';

describe('ContactAtComponent', () => {
  let component: ContactAtComponent;
  let fixture: ComponentFixture<ContactAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
