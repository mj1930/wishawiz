import { ProviderBussinessDetails } from "./providerBussinessDetails.model";
import { CustomerDetails } from "./customerDetails.model";
import { ServiceAvailabilityRange } from "./ServiceAvailabilityRange.model";
import { LoginAttempt } from "./loginAttempt.model";
import { Categories } from "./categories.model";
import { Services } from "./services.model";
import { CustomerProfileStatus } from "./customerProfileStatus.model";
import { providerProfileStatus } from "./providerProfileStatus.model";

export class User{

    email: string;
    password: string;
    loginType: string;
    userLoginTypeID?: string;
    userType?: string;
    firstName?: string;
    lastName?: string;
    loginTypeToken?: string;
    pushToken?: string;
    profilePictureURL?: string;
    registeredDate?: string;
    providerBussinessDetails?: ProviderBussinessDetails;
    customerDetails?: CustomerDetails;
    serviceAvailabilityRange?: ServiceAvailabilityRange;
    loginAttempt?: LoginAttempt;
    categories?: Categories[];
    services?: Services[];
    customerProfileStatus?: CustomerProfileStatus;
    providerProfileStatus?: providerProfileStatus;

}