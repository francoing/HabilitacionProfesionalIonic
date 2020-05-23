import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-niños',
  templateUrl: 'niños.html',
})
export class NiñosPage {

  FormNinos: FormGroup;
  ListaNinos:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {

    this.FormNinos = this.createFormNiños();
  }
  saveData(){
    console.log(this.FormNinos.value);
  }

  private createFormNiños(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      dni: ['', Validators.required],
      peso: ['', Validators.required],
      talla: ['', Validators.required],
      edad: ['', Validators.required],
      fechaNac: ['', Validators.required],				
    });
  }

  agregar_ninos(){
    this.ListaNinos.push(this.FormNinos);

  }

  
}
