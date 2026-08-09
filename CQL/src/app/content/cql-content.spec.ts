import { contact, industries, services } from './cql-content';

describe('CQL content', () => {
  it('covers all seven service practices', () => {
    expect(services).toHaveLength(7);
    expect(services.map((service) => service.title)).toEqual([
      'Process Management', 'Quality Management', 'Cost Management',
      'Environmental, Health, and Safety Management', 'Human Resources Management',
      'IT Development and Support', 'Other Services',
    ]);
  });

  it('lists the 17 industry sectors', () => expect(industries).toHaveLength(17));

  it('uses direct telephone and email contact targets', () => {
    expect(contact.phoneHref).toBe('tel:+6328264137');
    expect(`mailto:${contact.email}`).toBe('mailto:info@cql.com.ph');
  });
});
