import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
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
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      encargado: ['', Validators.required],
      email: ['', Validators.required],
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


}
