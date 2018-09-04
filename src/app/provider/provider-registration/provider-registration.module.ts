import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularGooglePlaceModule } from 'angular-google-place';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    Ng4GeoautocompleteModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    AngularGooglePlaceModule,
    ReactiveFormsModule

  ],
  declarations: [BusinessDetailsComponent],
  exports:[BusinessDetailsComponent]
})
export class ProviderRegistrationModule { }
