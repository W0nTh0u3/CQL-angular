import { Routes } from '@angular/router';

import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { EdgeComponent } from './components/edge/edge.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'CQL Business Systems Consulting',
  },
  { path: 'people', component: PeopleComponent, title: 'People | CQL' },
  { path: 'services', component: ServicesComponent, title: 'Services | CQL' },
  { path: 'edge', component: EdgeComponent, title: 'The CQL Way | CQL' },
  {
    path: 'clients',
    component: ClientsComponent,
    title: 'Industry Exposure | CQL',
  },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | CQL' },
  { path: '**', redirectTo: '' },
];
