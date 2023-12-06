import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FestivalsComponent } from './components/festivals/festivals.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { HomeComponent } from './components/home/home.component';
import { GopalGardenComponent } from './components/projects/gopal-garden/gopal-garden.component';
import { KrishnaHouseComponent } from './components/projects/krishna-house/krishna-house.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'festivals',
        component: FestivalsComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        children: [
          {
            path: '',
            redirectTo: 'gopal-garden',
            pathMatch: 'full'
          },
          {
            path: 'gopal-garden',
            component: GopalGardenComponent
          },
          {
            path: 'krishna-house',
            component: KrishnaHouseComponent
          }
        ]
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: 'testimonials',
        component: TestimonialsComponent
      },
      {
        path: 'gallery',
        component: GalleriesComponent
      },
      {
        path: 'contact',
        component: ContactUsComponent
      }
];
