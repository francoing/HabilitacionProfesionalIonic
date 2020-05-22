import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the EncargadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encargado',
  templateUrl: 'encargado.html',
})
export class EncargadoPage {

  FormEncargado: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.FormEncargado = this.createFormEncargado();
  }

  saveData(){
    console.log(this.FormEncargado.value);
  }

  private createFormEncargado(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
     
    });
  }
  irAtras(){
    this.navCtrl.pop();
  }

}
