import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  it('renders every application route', async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelectorAll('.desktop-menu a'),
    ).toHaveLength(6);
  });

  it('opens and closes the mobile menu', async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector(
      'button',
    ) as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelectorAll('#mobile-menu a'),
    ).toHaveLength(6);
    button.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#mobile-menu')).toBeNull();
  });
});
