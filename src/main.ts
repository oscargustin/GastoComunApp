import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { addIcons } from 'ionicons';
import { environment } from './environments/environment'; // Importa la configuración de Firebase

import { home, settings, cash, documentText } from 'ionicons/icons';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

addIcons({
  home: home,
  settings: settings,
  cash: cash,
  'document-text': documentText,
});

// Inicializa Firebase
AngularFireModule.initializeApp(environment.firebaseConfig);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    AngularFirestoreModule
  ],
});
