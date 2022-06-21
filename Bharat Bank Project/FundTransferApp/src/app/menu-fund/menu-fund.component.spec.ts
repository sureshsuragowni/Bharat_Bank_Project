import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFundComponent } from './menu-fund.component';

describe('MenuFundComponent', () => {
  let component: MenuFundComponent;
  let fixture: ComponentFixture<MenuFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
