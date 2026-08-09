import { routes } from './app.routes';

describe('application routes', () => {
  it('provides each public CQL route', () => {
    expect(routes.map((route) => route.path)).toEqual([
      '',
      'people',
      'services',
      'edge',
      'clients',
      'contact',
      '**',
    ]);
  });
});
