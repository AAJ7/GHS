
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubServicesComponent } from './sub-services.component';

const routes: Routes = [{ path: '', component: SubServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubServicesRoutingModule {}
