import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantFilter } from './consultant-filter';

describe('ConsultantFilter', () => {
  let component: ConsultantFilter;
  let fixture: ComponentFixture<ConsultantFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
