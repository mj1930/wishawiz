import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ModalService {

  private loginModal = new BehaviorSubject(false);
  loginOb = this.loginModal.asObservable();
  
  private signupModal = new BehaviorSubject(false);
  signupOb = this.signupModal.asObservable();

  constructor() { }

  toggleLogin(message: boolean) {
    console.log(2);
    this.loginModal.next(message)
  }
  toggleSignup(message: boolean){
    console.log(22);
    this.signupModal.next(message)
  }

}