import { BlsHeader } from "./bls-header.model";
import { User } from "./user.model";

export class LoginSignUpRequestResponse{
  blsHeader: BlsHeader;
  token: string;
  user: User;
  
  constructor(blsHeader: BlsHeader,user: User){
      this.blsHeader = blsHeader;
      this.user = user;
  }
}