export interface NavigationItem {
  readonly label: string;
  readonly path: string;
}

export const navigationItems: readonly NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'People', path: '/people' },
  { label: 'Services', path: '/services' },
  { label: 'Edge', path: '/edge' },
  { label: 'Clients', path: '/clients' },
  { label: 'Contact Us', path: '/contact' },
];
