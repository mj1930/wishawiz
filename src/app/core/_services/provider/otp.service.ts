import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CountryRequestResponse } from "../../_models/country/countryRequestResponse.model";
import { throwError } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { tap, catchError } from "rxjs/operators";
import { OtpRequestResponse } from "../../_models/provider/otpRequestResponse.model";
import { RequestGenerator } from "./requestGenertor.service";
import { OtpReqBodyForm } from "../../_models/provider/otpReqBodyForm.model";

@Injectable()
export class OtpService{
    constructor(private http: HttpClient,
                private toastr: ToastrService,
                private req: RequestGenerator){}

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
      fetchCountries(){
 
        return this.http.post<CountryRequestResponse>('/user/rest/customer_mobile_contries.json',{"blsHeader" : JSON.parse(sessionStorage.getItem('blsHeader'))})
        .pipe(
            tap(
                _ => _,
                _ => this.toastr.error('Invalid/Existing data', 'ERROR!!')
              ),
            catchError(this.handleError)
        );
    
      }
      requestOtp(otpReqBodyForm : OtpReqBodyForm){
        return this.http.post<OtpRequestResponse>('/user/rest/otp.json',this.req.otpRequest(otpReqBodyForm))
        .pipe(
            tap(
                _ => _,
                _ => this.toastr.error('Invalid/Existing data', 'ERROR!!')
              ),
            catchError(this.handleError)
        );
      }

}