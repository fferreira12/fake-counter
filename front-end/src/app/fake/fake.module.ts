import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFakeComponent } from './components/add-fake/add-fake.component';
import { ListFakesComponent } from './components/list-fakes/list-fakes.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AddFakeComponent, ListFakesComponent],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [
    AddFakeComponent, ListFakesComponent
  ]
})
export class FakeModule { }
