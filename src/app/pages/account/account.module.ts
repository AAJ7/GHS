import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AccountModule {}
