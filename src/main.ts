import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
// import { homeOutline, settingsOutline, documentTextOutline, cashOutline } from 'ionicons/icons';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { addIcons } from 'ionicons';
import {
  home,
  settings,
  cash,
  documentText,
} from 'ionicons/icons';

addIcons({
  home: home,
  settings: settings,
  cash: cash,
  'document-text': documentText,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});

document.addEventListener('touchmove', () => {}, { passive: true });