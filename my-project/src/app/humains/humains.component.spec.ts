import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumainsComponent } from './humains.component';

describe('HumainsComponent', () => {
  let component: HumainsComponent;
  let fixture: ComponentFixture<HumainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
