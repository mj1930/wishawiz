import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { ProviderModule } from './provider/provider.module';


import { AppComponent } from './app.component';
import { ModalService } from "./core/_services/modal.service";
import { AuthService } from './core/_services/auth.service';
import { AuthRequestGenerator } from './core/_services/authRequestGenrateror.service';
import { HttpRequestInterceptor } from './core/_interceptors/http.interceptor';
import { NguCarouselModule } from '@ngu/carousel';
import { ProviderRegistrationService } from './core/_services/provider/providerRegistation.service';
import { RequestGenerator } from './core/_services/provider/requestGenertor.service';
import { HomeModule } from './home/home.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { routes } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
@NgModule({
  declarations: [
  
     AppComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    AuthModule,
    ProviderModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
     ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: false,
      closeButton: false,
      extendedTimeOut: 1000,
      easing: 'ease-in',
      easeTime: 300,
      tapToDismiss: true,
      

      
    }),
    NguCarouselModule,
    ProviderModule,
    LayoutModule
     
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ModalService,
              AuthService,
              AuthRequestGenerator,
              { provide: HTTP_INTERCEPTORS, 
                useClass: HttpRequestInterceptor, 
                multi: true
               },
              ProviderRegistrationService,
              RequestGenerator 
             
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
