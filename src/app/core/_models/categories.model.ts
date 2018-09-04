import { Services } from "./services.model";
export class Categories{
    catID : string;
    serviceCategory: string;
    status: string;
    date: string;
    availed: string;
    imageURL: string;
    services: Services[];
}