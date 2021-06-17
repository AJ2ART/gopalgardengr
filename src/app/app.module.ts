import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Entry Component */
import { AppComponent } from './app.component';

/* Components */
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FestivalsComponent } from './components/festivals/festivals.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GopalGardenComponent } from './components/projects/gopal-garden/gopal-garden.component';
import { KrishnaHouseComponent } from './components/projects/krishna-house/krishna-house.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FestivalsComponent,
    AboutUsComponent,
    TestimonialsComponent,
    GalleriesComponent,
    ContactUsComponent,
    ProjectsComponent,
    GopalGardenComponent,
    KrishnaHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
