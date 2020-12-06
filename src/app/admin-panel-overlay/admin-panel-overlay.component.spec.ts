import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelOverlayComponent } from './admin-panel-overlay.component';

describe('AdminPanelOverlayComponent', () => {
  let component: AdminPanelOverlayComponent;
  let fixture: ComponentFixture<AdminPanelOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
