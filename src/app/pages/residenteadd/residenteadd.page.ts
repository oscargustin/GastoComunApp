import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { AgregarResidenteComponent } from "../../shared/components/agregar-residente/agregar-residente.component";

@Component({
  selector: 'app-residenteadd',
  templateUrl: './residenteadd.page.html',
  styleUrls: ['./residenteadd.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AgregarResidenteComponent]
})
export class ResidenteaddPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
