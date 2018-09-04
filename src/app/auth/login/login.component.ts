import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalService } from "../../core/_services/modal.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('form') public loginModal;

  constructor(private modal: ModalService,
              private AuthService : AuthService,
              private toastr: ToastrService) { 

              }

  ngOnInit() {
    this.loginForm = new FormGroup({
      
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'password' : new FormControl(null,[Validators.required])
    });
  }
  ngAfterViewInit() {
    this.modal.loginOb.subscribe(
      value => { 
                  if(value){
                      this.show()
                    }
                    else{
                      this.hide()
                    }
                  }
            )
  }
  show(){
    this.loginModal.show();
  }
  hide(){
    this.loginModal.hide();
  }
  showSignup(){
    this.hide();
    this.modal.toggleSignup(true);
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.AuthService.AnonymousUserLogin(this.loginForm.value)
      .subscribe(
        (response)=>{
              if(response.blsHeader.status === "USER_CREDENTIAL_DOES_NOT_EXIST" ){
                this.toastr.error(response.blsHeader.message,'Whoops!!!');
              }else if(response.blsHeader.status === "USER_LOGIN_OK" ){
                this.toastr.success("you've successfully Loged In",'Congratulations!!!');
              }else if( response.blsHeader.status === "USER_LOGIN_ATTEMPT_FAIL"){
                this.toastr.error(response.blsHeader.message,'Whoops!!!');
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

