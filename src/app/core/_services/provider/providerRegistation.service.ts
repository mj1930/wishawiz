import { Injectable } from '@angular/core';
import { ProviderBussinessDetails } from '../../_models/providerBussinessDetails.model';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { BussinessDetailSubmitRequestResponse } from '../../_models/provider/bussinessDeatailSubmitRequestResponse.model';
import { tap, catchError } from 'rxjs/operators';
import { RequestGenerator } from './requestGenertor.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProviderRegistrationService {

  constructor(
    private http: HttpClient,
    private reqGenerator: RequestGenerator,
    private toastr: ToastrService
  ) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
     
      console.error('An error occurred:', error.error.message);
    } else {
     
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    
    return throwError(
      this.toastr.error('Invalid/Existing data', 'ERROR!!'));
  };

  bussinessDetailsSubmit(providerBussinessDetails: ProviderBussinessDetails){
 
    return this.http.post<BussinessDetailSubmitRequestResponse>('/user/rest/p_business_submit.json',this.reqGenerator.bussinessDetailsSubmitRequest(providerBussinessDetails))
    .pipe(
        tap(
            _ => _,
            _ => this.toastr.error('Invalid/Existing data', 'ERROR!!')
          ),
        catchError(this.handleError)
    );

  }
}
