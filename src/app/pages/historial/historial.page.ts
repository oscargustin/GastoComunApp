import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: true,
  imports: [IonicModule, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistorialPage {
  constructor(private alertController: AlertController){}

  async selectSpace(space: string) {
    const alert = await this.alertController.create({
      header: 'Reservar espacio',
      message: `¿Desea reservar el espacio: <strong>${space}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Reservar',
          handler: () => {
            this.confirmReservation(space);
          },
        },
      ],
    });

    await alert.present();
  }

  confirmReservation(space: string) {
    // Lógica para confirmar la reserva
    console.log(`Reserva confirmada para: ${space}`);
    // Aquí puedes agregar la lógica para registrar la reserva en tu backend
  }
  }


