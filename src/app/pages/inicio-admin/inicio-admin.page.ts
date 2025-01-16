import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent,IonInfiniteScroll, InfiniteScrollCustomEvent } from '@ionic/angular/standalone';
import { IonicModule, } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { MuroComunidadComponent } from "../../shared/components/muro-comunidad/muro-comunidad.component";
import { PagosvistaAdminComponent } from 'src/app/shared/components/pagosvista-admin/pagosvista-admin.component';
import { AgregarResidenteComponent } from "../../shared/components/agregar-residente/agregar-residente.component";


@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.page.html',
  styleUrls: ['./inicio-admin.page.scss'],
  imports: [ CommonModule, HeaderComponent, MuroComunidadComponent, IonicModule, PagosvistaAdminComponent, MuroComunidadComponent, FormsModule, AgregarResidenteComponent]
})
export class InicioAdminPage implements OnInit {


  
  items: { titulo: string; descripcion: string; fecha: string; avatar: string }[] = [];
  itemUser: {tituloUser: string; descripcionUser: string; fechaUser: string; avatarUser: string }[] = [];
  selectedTab: string ="muro";
  ngOnInit() {

  }

  //
}