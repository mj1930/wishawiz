import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes as routes } from './home.routes'
import { AppDownloadComponent } from './app-download/app-download.component';
import { CounterComponent } from './counter/counter.component';
import { FeatureareaComponent } from './featurearea/featurearea.component';
import { IconGridComponent } from './icon-grid/icon-grid.component';
import { JoinComponent } from './join/join.component';
import { ServicesComponent } from './services/services.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [
                  HomeComponent,
                  AppDownloadComponent,
                  CounterComponent,
                  FeatureareaComponent,
                  IconGridComponent,
                  JoinComponent,
                  CustomerHeaderComponent,
                  CustomerFooterComponent,
                  TestimonialsComponent
                                                

                ],
  exports:[]
}) 
export class HomeModule { }