import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonContent, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonLabel, IonButton,IonIcon, CommonModule,IonBackButton, IonButtons, IonTitle, IonHeader, CommonModule, FormsModule, IonToolbar, IonButtons ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
