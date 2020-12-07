import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaioutComponent } from './laiout.component';

describe('LaioutComponent', () => {
  let component: LaioutComponent;
  let fixture: ComponentFixture<LaioutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaioutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaioutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
