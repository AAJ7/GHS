import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatedSuccessfullyComponent } from './components/updated-successfully/updated-successfully.component';

const routes: Routes = [
  {
    path : "" , component : UpdatedSuccessfullyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatedSuccessfullyRoutingModule { }
