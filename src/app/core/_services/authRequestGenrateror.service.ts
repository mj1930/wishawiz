import { Injectable } from "@angular/core";
import { BasicUser } from "../_models/basicUser.model";
import { LoginSignUpRequestResponse } from "../_models/loginSignUpRequestResponse";


@Injectable()
export class AuthRequestGenerator{
    constructor(){ }

    AnonymousSignUpRequest(b_user: BasicUser){
     const user = this.SetSignUpUser(b_user);
     return new LoginSignUpRequestResponse(JSON.parse(sessionStorage.getItem('blsHeader')),user);   
    
    }
    AnonymousLoginRequest(b_user: BasicUser){
        const user = this.SetLoginUser(b_user); 
        return new LoginSignUpRequestResponse(JSON.parse(sessionStorage.getItem('blsHeader')),user); 
    }


    private SetSignUpUser(b_user: BasicUser) {
        return {
            'email': b_user.email,
            'firstName': b_user.firstName,
            'lastName': b_user.lastName,
            'loginType': "anonymous",
            'loginTypeToken': "",
            'password': b_user.password,
            'userLoginTypeID': "",
            'userType': 'customer'
        };
    }
    private SetLoginUser(b_user: BasicUser){
        return {
         'email':b_user.email,
         'password':b_user.password,
         'loginType': 'anonymous'
        };
    }
}