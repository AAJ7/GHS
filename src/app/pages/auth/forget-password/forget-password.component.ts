import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { ForgetPasswordService } from 'src/app/core/services/ClientAuth/forget-password/forget-password.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  ForgetPasswordForm:FormGroup = new FormGroup({
    email            : new FormControl(null , [Validators.required , Validators.email])
  });

  constructor(private ForgetPassword: ForgetPasswordService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  forgetPasswordForm(FormGroup: FormGroup) {
    if(FormGroup.valid) {
      this.spinner.show();
      this.ForgetPassword.get(FormGroup.value).subscribe({
        next:(response)=> {
        }
      });
    }
  }
}
