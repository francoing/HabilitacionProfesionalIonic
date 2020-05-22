import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

// Formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NiñosPage } from '../niños/niños';
import { NinosPage } from '../ninos/ninos';



@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,private modalCtrl:ModalController) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }
  saveData(){
    console.log(this.myForm.value);
  }

  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      cantidad_ni: ['', Validators.required],
      encargado_id: ['', Validators.required],
      // dateBirth: ['', Validators.required],
      // passwordRetry: this.formBuilder.group({
      //   password: ['', Validators.required],
      //   passwordConfirmation: ['', Validators.required]º
      // }),
      // gender: ['', Validators.required],
    });
  }

  irAtras(){
    this.navCtrl.pop();
  }

  mostrar_modalNinos(){
    
    this.modalCtrl.create(NinosPage).present();

  }


}
