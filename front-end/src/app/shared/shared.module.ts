import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirective } from './directives/dragdrop.directive';
import { ImageInputComponent } from './components/image-input/image-input.component';



@NgModule({
  declarations: [DragDropDirective, ImageInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DragDropDirective, ImageInputComponent
  ]
})
export class SharedModule { }
