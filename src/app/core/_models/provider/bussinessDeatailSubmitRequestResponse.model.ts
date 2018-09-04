import { BlsHeader } from "../bls-header.model";
import { ProviderBussinessDetails } from "../providerBussinessDetails.model";
export class BussinessDetailSubmitRequestResponse{
 blsHeader : BlsHeader;
 email : string;
 providerBussinessDetails : ProviderBussinessDetails;   
 constructor(blsHeader,email,providerBussinessDetails){
     this.blsHeader = blsHeader;
     this.email = email;
     this.providerBussinessDetails = providerBussinessDetails;
  }
}