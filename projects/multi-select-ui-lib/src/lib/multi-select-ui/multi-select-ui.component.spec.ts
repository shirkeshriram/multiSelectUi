import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectUiComponent } from './multi-select-ui.component';

describe('MultiSelectUiComponent', () => {
  let component: MultiSelectUiComponent;
  let fixture: ComponentFixture<MultiSelectUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
