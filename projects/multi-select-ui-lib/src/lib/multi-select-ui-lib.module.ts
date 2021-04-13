import { NgModule } from '@angular/core';
import { MultiSelectUiComponent } from './multi-select-ui/multi-select-ui.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    MultiSelectUiComponent
  ],
  imports: [
	CommonModule
  ],
  exports: [
    MultiSelectUiComponent
  ]
})
export class MultiSelectUiLibModule { }
