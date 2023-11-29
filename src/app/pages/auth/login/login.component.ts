import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/ClientAuth/Login/login.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fieldPassType = false;
  errorMessage: string = "";
  LoginForm:FormGroup = new FormGroup({
    email      : new FormControl(null , [Validators.required , Validators.email]),
    password   : new FormControl(null , [Validators.required])
  });

  constructor(private Login: LoginService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private LocalStorage: LocalStorageService) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem("clientToken")!)?.token) {
      this.router.navigateByUrl("/home", { replaceUrl: true });
    }
  }

  login(FormGroup: FormGroup) {
    if(FormGroup.valid) {
      this.spinner.show();
      const formData = new FormData();
      formData.append("email" , FormGroup.value.email);
      formData.append("password" , FormGroup.value.password);
      this.Login.login(formData).subscribe({
        next:(response)=> {
          if(response?.status) {
            this.errorMessage = "";
            let object = {
              id         : response?.data?.id,
              name       : response?.data?.name,
              email      : response?.data?.email,
              phone      : response?.data?.phone,
              age        : response?.data?.age,
              address    : response?.data?.address,
              gender     : response?.data?.gender,
              country_id : response?.data?.country_id,
              token      : response?.data?.token
            }
            localStorage.setItem("clientToken" , JSON.stringify(object));
            this.LocalStorage.BS.next(true);
            this.spinner.hide();
            this.router.navigateByUrl("/home", { replaceUrl: true });
          } else if(!response?.status) {
            this.errorMessage = response?.message;
            this.spinner.hide();
          }
        }
      });
    }
  }
}
