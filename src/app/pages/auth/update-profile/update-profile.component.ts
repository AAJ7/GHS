import { Component, OnInit } from '@angular/core';
import { UpdateProfileService } from 'src/app/core/services/ClientAuth/updateProfile/update-profile.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  fieldPassType = false;
  fieldConfirmPassType = false;

  constructor() {

  }
  ngOnInit(): void {

  }

  updateProfile() {

  }
}
