import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OtpService } from '../../core/_services/provider/otp.service';
import { Country } from '../../core/_models/country/country.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  MobileVarification : FormGroup;
  Countries : Country[];
  dailCode: string = " ";
    constructor(private otp: OtpService) {
    this.MobileVarification = new FormGroup({
      'dialCode' : new FormControl(null,[Validators.required]),
      'mobile' : new FormControl(null,[Validators.required])
    });
    this.otp.fetchCountries().subscribe
    (
      (response)=>{this.Countries=response.countries;}
    );
   }

  ngOnInit() {
  }
  onSubmitMobile(){
    console.log(this.MobileVarification.value);
    this.otp.requestOtp(this.MobileVarification.value).subscribe
    (
      (response)=>{
        console.log(response);
      }
    );
  }

}
