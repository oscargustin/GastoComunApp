import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-agregar-residente',
  templateUrl: './agregar-residente.component.html',
  styleUrls: ['./agregar-residente.component.scss'],
  standalone:true,
  imports:[IonicModule, FormsModule,CommonModule]
})
export class AgregarResidenteComponent  implements OnInit {
agregarResidente() {
throw new Error('Method not implemented.');
}

residente = {
  nombre: '',
  correo: '',
  rut: '',
  telefono: '',
  departamento: '',
  piso: '',
  rol: ''
};

  constructor() { }

  ngOnInit() {}

}
