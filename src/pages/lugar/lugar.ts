import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

// Formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NiñosPage } from '../niños/niños';
import { NinosPage } from '../ninos/ninos';
import { LugarProvider } from '../../providers/lugar/lugar';



@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

  nombre:string="";
  direccion:string="";
  cantidad_ni:string="";
  encargado_id:string="";
  // myForm: FormGroup;

  lugar:string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private modalCtrl:ModalController,
    private _lg:LugarProvider) {
    // this.myForm = this.createMyForm();
    this._lg.cargarEncargados();
  }

  
  saveData(){
    // console.log(this.myForm.value);
  }

  // private createMyForm(){
  //   return this.formBuilder.group({
  //     nombre: ['', Validators.required],
  //     direccion: ['', Validators.required],
  //     cantidad_ni: ['', Validators.required],
  //     encargado_id: ['', Validators.required],
  //     // dateBirth: ['', Validators.required],
  //     // passwordRetry: this.formBuilder.group({
  //     //   password: ['', Validators.required],
  //     //   passwordConfirmation: ['', Validators.required]
  //     // }),
  //     // gender: ['', Validators.required],
  //   });
  // }

  irAtras(){
    this.navCtrl.pop();
  }

  mostrar_modalNinos(){
    
    // this.modalCtrl.create(NinosPage,{lugar:lugar}).present();
    this.navCtrl.push(NinosPage,{
      // myForm:this.myForm.value.nombre    
      });
      // console.log(this.myForm.value.nombre);
      
  }

  enviarData(){
    this._lg.enviarData(this.nombre,this.direccion,this.cantidad_ni,this.encargado_id);
    this.navCtrl.push(NinosPage);
  }

  


}
