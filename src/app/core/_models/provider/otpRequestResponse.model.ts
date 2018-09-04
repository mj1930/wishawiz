import { BlsHeader } from "../bls-header.model";
import { OtpReqBodyForm } from "./otpReqBodyForm.model";

export class OtpRequestResponse{
    blsHeader: BlsHeader;
    dialCode: string;
    email: string;
    mobile: number;
    userType?: string;
    otp?: number;
    otpMaxTime?: number;
    constructor(blsHeader: BlsHeader,email: string,otpReqBodyForm: OtpReqBodyForm){
        this.blsHeader = blsHeader;
        this.email = email;
        this.dialCode = otpReqBodyForm.dialCode;
        this.mobile = otpReqBodyForm.mobile;
        //console.log(this.dailCode+this.mobile);
    }
}