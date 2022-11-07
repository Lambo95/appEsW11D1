import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColCardComponent } from './col-card.component';

describe('ColCardComponent', () => {
  let component: ColCardComponent;
  let fixture: ComponentFixture<ColCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
