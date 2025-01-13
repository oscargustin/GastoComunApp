import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, HeaderComponent]
})
export class LoginPage implements OnInit {

  constructor() { }

  usuario={
    username:'',
    password:''
  }
  ngOnInit() {
  }
    
    onSubmit(){
      console.log("works!!!!")
    }

}
