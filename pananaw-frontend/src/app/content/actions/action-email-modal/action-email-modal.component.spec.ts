import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEmailModalComponent } from './action-email-modal.component';

describe('ActionEmailModalComponent', () => {
  let component: ActionEmailModalComponent;
  let fixture: ComponentFixture<ActionEmailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionEmailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionEmailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
