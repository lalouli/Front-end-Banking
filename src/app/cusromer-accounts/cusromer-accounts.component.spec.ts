import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusromerAccountsComponent } from './cusromer-accounts.component';

describe('CusromerAccountsComponent', () => {
  let component: CusromerAccountsComponent;
  let fixture: ComponentFixture<CusromerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusromerAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusromerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
