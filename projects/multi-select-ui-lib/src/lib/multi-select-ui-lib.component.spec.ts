import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectUiLibComponent } from './multi-select-ui-lib.component';

describe('MultiSelectUiLibComponent', () => {
  let component: MultiSelectUiLibComponent;
  let fixture: ComponentFixture<MultiSelectUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectUiLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
