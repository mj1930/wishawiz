import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { AuthRequestGenerator } from './authRequestGenrateror.service';
import { BasicUser } from '../_models/basicUser.model';
import { LoginSignUpRequestResponse } from '../_models/loginSignUpRequestResponse';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private authRequestGenrator: AuthRequestGenerator,
    private toastr: ToastrService

) {      
  }
  
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
     
      console.error('An error occurred:', error.error.message);
    } else {
     
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    
    return throwError(
      'Something bad happened; please try again later.');
  };
   AnonymousUsersignUp(user: BasicUser): Observable<LoginSignUpRequestResponse> {

        return this.http.post<LoginSignUpRequestResponse>('/rest/signup.json',this.authRequestGenrator.AnonymousSignUpRequest(user))
        .pipe(
            tap(
                _ => _,
                _ => this.toastr.error('Invalid/Existing data', 'ERROR!!')
              ),
            catchError(this.handleError)
        );
   }
   AnonymousUserLogin(user: BasicUser): Observable<LoginSignUpRequestResponse> {

    return this.http.post<LoginSignUpRequestResponse>('/rest/login.json',this.authRequestGenrator.AnonymousSignUpRequest(user))
    .pipe(
        tap(
            _ => _,
            _ => this.toastr.error('Invalid/Existing data', 'ERROR!!')
          ),
        catchError(this.handleError)
    );
}
//    forgetPassword(userPasswordRecovery: User,blsHeader : BlsHeader): Observable<any> {

//     return this.http.post('rest/p_recovery.json', {blsHeader,userPasswordRecovery});
      
//   }

}
