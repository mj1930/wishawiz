import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProviderRegistrationService } from '../../../core/_services/provider/providerRegistation.service';


@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent implements OnInit {

  businessDeatailsForm: FormGroup;
  constructor(private provider:ProviderRegistrationService
  ) {
      this.businessDeatailsForm = new FormGroup({
       'businessName' : new FormControl(null,[Validators.required]),
       'businessEmail' : new FormControl(null,[Validators.required,Validators.email]),
       'addressLine' : new FormControl(null,[Validators.required]),
       'buildingOrFlatNumber' : new FormControl(null,[Validators.required]),
       'streetAddress' : new FormControl(null,Validators.required),
       'postalCode' : new FormControl(null,Validators.required),
       'state' : new FormControl(null,Validators.required),
       'country' : new FormControl(null,Validators.required),
       'city' :new FormControl(null),
       'latitude' : new FormControl(null),
       'longitude' : new FormControl(null),
       'placeID' : new FormControl(null)    
        
      });
   }

  ngOnInit() {
  }
 
  onSubmit(){
    console.log(1);
    this.provider.bussinessDetailsSubmit(this.businessDeatailsForm.value)
    .subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  getFormattedAddress(address){

    this.businessDeatailsForm.patchValue({
                                         'addressLine' : address.name,
                                         'streetAddress': address.street,   
                                         'state': address.state,
                                         'postalCode': address.postal_code,
                                         'country' : address.country,
                                         'latitude' : address.lat,
                                         'longitude' : address.lng,
                                         'city' : address.city,
                                         'placeID' : address.place_id 
                                                                                    
                                          });
  }

}
