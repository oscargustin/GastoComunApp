import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, ReactiveFormsModule]
})
export class LoginPage {

  form  = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),

  })

  constructor(private router:Router) { }


    submit(){
     if( this.form.valid){
        this.router.navigateByUrl('/tabs');
      }
    }

}
