import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from '../../core/_services/modal.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  @ViewChild('signupForm') public signupModal;
  constructor(
            private modal: ModalService,
            private AuthService : AuthService,
            private toastr: ToastrService            
             
              ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'first_name' : new FormControl(null,[Validators.required]),
      'last_name' : new FormControl(null,Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'password' : new FormControl(null,[Validators.required])
    });
  }
  ngAfterViewInit() {
    this.modal.signupOb.subscribe(
      value => { 
                  if(value){
                    console.log('sp'+value);
                      this.show()
                    }
                    else{
                      this.hide()
                    }
                  }
            )
  }
  show(){
    console.log('ddd');
    this.signupModal.show();
  }
  hide(){
    this.signupModal.hide();
  }
  onSubmit(){
    if(this.signUpForm.valid){
      this.AuthService.AnonymousUsersignUp(this.signUpForm.value)
      .subscribe(
        (response)=>{
              if(response.blsHeader.status === "USER_ALREADY_EXIST" ){
                this.toastr.error(response.blsHeader.message,'Whoops!!!');
              }else if(response.blsHeader.status === "USER_SIGNUP_OK" ){
                this.toastr.success("you've successfully registered",'Congratulations!!!');
              }else{
                this.toastr.error("Something Goes Wrong!!!");
              }
              
        },
        (error) => {
          console.log(error);
        }
      );
    }else{
      
    }
 
  }
}
