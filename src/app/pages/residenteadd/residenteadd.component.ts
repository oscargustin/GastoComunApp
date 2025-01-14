import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-residenteadd',
  templateUrl: './residenteadd.component.html',
  styleUrls: ['./residenteadd.component.scss'],
  imports: [IonicModule, FormsModule,]
})
export class ResidenteaddComponent  {

  
  resident = {
    name: '',
    email: '',
    apartment: '',
    role: 'residente'
  };

  constructor(private alertController: AlertController) {}

  async addResident() {
    if (this.isFormValid()) {
      // Aquí puedes enviar los datos a tu backend o manejarlos según tu lógica
      console.log('Nuevo residente:', this.resident);

      const alert = await this.alertController.create({
        header: 'Residente Añadido',
        message: `El residente ${this.resident.name} ha sido añadido exitosamente.`,
        buttons: ['OK']
      });

      await alert.present();
      this.resetForm();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos antes de continuar.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  private isFormValid(): boolean {
  return (
    this.resident.name.trim() !== '' &&
    this.resident.email.trim() !== '' &&
    this.resident.apartment.trim() !== '' &&
    this.resident.role.trim() !== ''
  );
  }

  private resetForm() {
    this.resident = {
      name: '',
      email: '',
      apartment: '',
      role: 'residente'
    };
  }
}
