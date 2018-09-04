import { BlsHeader } from "../bls-header.model";
import { Country } from "./country.model";

export class CountryRequestResponse{
    
     email: string;
     userMobile: string;
     userDailCode: string;
     countries: Country[];
     blsHeader: BlsHeader;
}