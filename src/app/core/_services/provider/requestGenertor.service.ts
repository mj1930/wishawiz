import { Injectable } from '@angular/core';
import { ProviderBussinessDetails } from '../../_models/providerBussinessDetails.model';
import { BussinessDetailSubmitRequestResponse } from '../../_models/provider/bussinessDeatailSubmitRequestResponse.model';
import { OtpRequestResponse } from '../../_models/provider/otpRequestResponse.model';
import { OtpReqBodyForm } from '../../_models/provider/otpReqBodyForm.model';

@Injectable()
export class RequestGenerator {

  constructor() { }
  
  bussinessDetailsSubmitRequest(providerBussinessDetails : ProviderBussinessDetails){
  
    return new BussinessDetailSubmitRequestResponse(JSON.parse(sessionStorage.getItem('blsHeader')),sessionStorage.getItem('email'),providerBussinessDetails);
  }
  otpRequest(otpReqBodyForm: OtpReqBodyForm){
    
    return new OtpRequestResponse(JSON.parse(sessionStorage.getItem('blsHeader')),sessionStorage.getItem('email'),otpReqBodyForm);

  }

}
