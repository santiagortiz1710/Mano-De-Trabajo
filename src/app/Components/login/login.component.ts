import { RegisterComponent } from './../register/register.component';
import { login } from './../../models/register';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  productForm: FormGroup;

  constructor(  private fb: FormBuilder,) { 
    
    this.productForm = this.fb.group({
      Correo: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }
 

  ngOnInit(): void {
  }

  login(){
    console.log(this.productForm)

    const LOGIN: login = {

      Correo: this.productForm.get('Correo')?.value,
      contraseña: this.productForm.get('contraseña')?.value


    }
    console.log(LOGIN);
    
  }

}