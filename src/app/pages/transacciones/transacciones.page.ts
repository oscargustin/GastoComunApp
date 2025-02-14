import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.page.html',
  styleUrls: ['./transacciones.page.scss'],
  standalone: true,
  imports: [ IonicModule, FormsModule, CommonModule]
})
export class TransaccionesPage implements OnInit {

 
  allTransactions: any[] = [];
  transactions: any[] = [];
  segmentValue = 'in';

  constructor() { }

  ngOnInit() {
    this.allTransactions = [
      { id: 1, to: 'Pago gasto comun', date: '2022-05-22', amount: 5000 },
      { id: 2, to: 'Arriendo Quincho', date: '2022-03-02', amount: 7000 },
      { id: 3, to: 'Pago gasto comun', date: '2022-07-28', amount: 5000 },
      { id: 4, to: 'Arriendo Quincho', date: '2022-01-09', amount: 1000 },
      { id: 5, to: 'Pago gasto comun', date: '2022-04-13', amount: 5000 },
      { id: 3, to: 'Arriendo Quincho', date: '2022-07-28', amount: 3250 },
      { id: 4, to: 'Pago gasto comun', date: '2022-01-09', amount: 1000 },
      { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
      { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
      { id: 4, to: 'Pago gasto comun', date: '2022-01-09', amount: 5000 },
      { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
      { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
      { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
      { id: 4, to: 'Pago gasto comun', date: '2022-01-09', amount: 5000 },
      { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
      { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
      { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
      { id: 4, to: 'Pago gasto comun', date: '2022-01-09', amount: 5000 },
      { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
      { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
      { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
      { id: 4, to: 'Akhil Ag.', date: '2022-01-09', amount: 1000 },
      { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
    ];
    this.filterTransactions();
  }

  filterTransactions() {
    if(this.segmentValue == 'in') {
      this.transactions = this.allTransactions.filter(x => x.amount >= 0);
    } else {
      this.transactions = this.allTransactions.filter(x => x.amount < 0);
    }
  }

  segmentChanged(event: any) {
    console.log(event);
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }

}
