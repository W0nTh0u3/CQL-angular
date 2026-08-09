import { Routes } from '@angular/router';

import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'CQL Business Systems Consulting' },
  { path: 'people', component: PeopleComponent, title: 'People | CQL' },
  { path: 'services', component: ComingSoonComponent, title: 'Services | CQL', data: { title: 'Services' } },
  { path: 'edge', component: ComingSoonComponent, title: 'Edge | CQL', data: { title: 'Edge' } },
  { path: 'clients', component: ComingSoonComponent, title: 'Clients | CQL', data: { title: 'Clients' } },
  { path: 'contact', component: ComingSoonComponent, title: 'Contact Us | CQL', data: { title: 'Contact Us' } },
  { path: '**', redirectTo: '' },
];
