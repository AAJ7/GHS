import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/account/update-profile', pathMatch: 'full' },
  { path: 'update-profile', component: UpdateProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
