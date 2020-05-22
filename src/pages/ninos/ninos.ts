import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the NinosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ninos',
  templateUrl: 'ninos.html',
})
export class NinosPage {
  FormNinos: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.FormNinos = this.createFormNinos();
  }

  saveData(){
    console.log(this.FormNinos.value);
  }

  private createFormNinos(){
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad NinosPage');
  }

}
