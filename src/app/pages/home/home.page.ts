import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MuroComunidadComponent } from "../../shared/components/muro-comunidad/muro-comunidad.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [MuroComunidadComponent,IonContent, IonToolbar, CommonModule, FormsModule, MuroComunidadComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
