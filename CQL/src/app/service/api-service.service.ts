import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  public get routerLinks() : any[] {
    return [
      { name: 'Home', linkName: '' },
      { name: 'People', linkName: 'people' },
      { name: 'Services', linkName: 'services' },
      { name: 'Edge', linkName: 'edge' },
      { name: 'Clients', linkName: 'clients' },
      { name: 'Contact Us', linkName: 'contact' },
    ];
  }
  
}
