import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/services/ClientAuth/register/register.service';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fieldPassType = false;
  fieldConfirmPassType = false;
  country:any[] = [];
  errorMessage: string = "";
  RegisterForm:FormGroup = new FormGroup({
    email            : new FormControl(null , [Validators.required , Validators.email]),
    password         : new FormControl(null , [Validators.required , Validators.minLength(6)]),
    confirm_password : new FormControl(null , [Validators.required , Validators.minLength(6)]),
    name             : new FormControl(null , [Validators.required]),
    phone            : new FormControl(null , [Validators.required]),
    age              : new FormControl(null , [Validators.required]),
    address          : new FormControl(null , [Validators.required]),
    gender           : new FormControl(null , [Validators.required]),
    country_id       : new FormControl(null , [Validators.required]),
  });

  constructor(private Register: RegisterService, private Countries: CountriesService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private LocalStorage: LocalStorageService) { }

  ngOnInit() {
    this.countries();
  }
  countries() {
    this.Countries.get().subscribe({
      next:(response)=> {
        for(let i = 0; i < response?.data.length; ++i) {
          this.country.push({id : response?.data[i]?.id , name_en : response?.data[i]?.name_en});
        }
      }
    });
  }
  register(FormGroup: FormGroup) {
    if(FormGroup.valid) {
      this.spinner.show();
      this.Register.register(FormGroup.value).subscribe({
        next:(response)=> {
          if(response?.status) {
             let obj = {
              country_id : response?.data?.country_id,
              email      : response?.data?.email,
              id         : response?.data?.id,
              name       : response?.data?.name,
              phone      : response?.data?.phone,
              token      : response?.data?.token
            };
            localStorage.setItem("clientToken" , JSON.stringify(obj));
            this.LocalStorage.BS.next(true);
            this.spinner.hide();
            this.router.navigateByUrl("/home", { replaceUrl: true });
          } else if(!response?.status) {
            this.spinner.hide();
            if(response?.message?.email && response?.message?.phone) {
              this.errorMessage = `${response?.message?.email[0]} and ${response?.message?.phone[0]}`;
            } else  if(response?.message?.email && !response?.message?.phone) {
              this.errorMessage = `${response?.message?.email[0]}`;
            } else  if(!response?.message?.email && response?.message?.phone) {
              this.errorMessage = `${response?.message?.phone[0]}`;
            }
          }
        }
      });
    }
  }
}
