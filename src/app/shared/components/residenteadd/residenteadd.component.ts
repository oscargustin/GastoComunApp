import { Component, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-residenteadd',
  templateUrl: './residenteadd.component.html',
  styleUrls: ['./residenteadd.component.scss'],
  imports: [IonicModule, FormsModule,]
})
export class ResidenteaddComponent  {
  constructor(private firestore: AngularFirestore) {}

  // Registrar un nuevo residente con deuda inicial
  async registrarResidenteConDeuda(residente: any) {
    try {
      // Agregar residente a la colección "residentes"
      const residenteRef = await this.firestore.collection('residentes').add(residente);

      // Crear deuda inicial
      const deudaInicial = {
        residenteId: residenteRef.id,
        residenteCorreo: residente.correo,
        monto: 50000, // Monto inicial de la deuda
        estado: 'pendiente',
        fechaGeneracion: new Date().toISOString(),
        detalle: 'Gasto común inicial'
      };

      await this.firestore.collection('pagos').add(deudaInicial);

      console.log('Residente registrado con deuda inicial');
    } catch (error) {
      console.error('Error registrando residente con deuda inicial:', error);
    }
  }
}
