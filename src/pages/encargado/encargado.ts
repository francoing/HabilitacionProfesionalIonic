import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncargadosProvider } from '../../providers/encargados/encargados';


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

  nombre:string="";
  dni:string="";
  direccion:string="";
  telefono:string="";

  // FormEncargado: FormGroup;

  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public formBuilder: FormBuilder,
   private _en:EncargadosProvider) {
    // this.FormEncargado = this.createFormEncargado();
  }

  saveData(){
    console.log("Se envio a la base de datos:",
    this.nombre,
    this.direccion,
    this.dni,
    this.telefono,);
    this._en.saveData(
      this.nombre,
      this.direccion,
      this.dni,
      this.telefono,
      );
  }

  // private createFormEncargado(){
  //   return this.formBuilder.group({
  //     nombre: ['', Validators.required],
  //     direccion: ['', Validators.required],
  //     dni: ['', Validators.required],
  //     telefono: ['', Validators.required],
     
  //   });
  // }
  irAtras(){
    this.navCtrl.pop();
  }

}
