import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTabs, IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { MuroComunidadComponent } from "../../shared/components/muro-comunidad/muro-comunidad.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [FormsModule,HeaderComponent, IonicModule, CommonModule, RouterLink, HeaderComponent]
})
export class TabsPage implements OnInit {

  @ViewChild('tabs', {static: false}) tabs!: IonTabs;
  selectedTab: any;

  constructor() { }

  ngOnInit() {
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }
  
}