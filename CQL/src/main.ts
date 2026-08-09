import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const fallbackRoute = new URLSearchParams(window.location.search).get('p');

if (fallbackRoute) {
  const fallbackUrl = new URL(fallbackRoute, document.baseURI);
  const query = new URLSearchParams(window.location.search).get('q');
  const fragment = new URLSearchParams(window.location.search).get('h');
  fallbackUrl.search = query ?? '';
  fallbackUrl.hash = fragment ?? '';
  window.history.replaceState(null, '', `${fallbackUrl.pathname}${fallbackUrl.search}${fallbackUrl.hash}`);
}

bootstrapApplication(AppComponent, appConfig).catch((error: unknown) =>
  console.error(error),
);
