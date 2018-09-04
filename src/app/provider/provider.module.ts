import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { HowtoUseComponent } from './howto-use/howto-use.component';
import { PartnerComponent } from './partner/partner.component';
import { WhyComponent } from './why/why.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureVideoComponent } from './feature-video/feature-video.component';
import { ProvidersTestimonialsComponent } from './providers-testimonials/providers-testimonials.component';
import { ProviderComponent } from './provider.component';
import { RouterModule } from '@angular/router';
import { ProviderRoutes } from './provider.routes';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OtpService } from '../core/_services/provider/otp.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProviderRoutes),
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  declarations: [ 
                  IntroComponent, 
                  HowtoUseComponent, 
                  PartnerComponent, 
                  WhyComponent, 
                  FooterComponent, 
                  FeatureVideoComponent,
                  ProvidersTestimonialsComponent,
                  ProviderComponent,],
  providers: [OtpService]                
  
})
export class ProviderModule { }
