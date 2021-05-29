import { IonicPage, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { EncargadoPage } from '../encargado/encargado';

import { DiagnosticosPage } from '../diagnosticos/diagnosticos';
import { DescripcionObesidadPage } from '../descripcion-obesidad/descripcion-obesidad';

/**
 * Generated class for the DietasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dietas',
  templateUrl: 'dietas.html',
})
export class DietasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DietasPage');
  }
  irAtras(){
    this.navCtrl.pop();
  }
  ir_DescripcionObesidad(){
    this.navCtrl.push("DescripcionObesidadPage");
  }
  ir_DescripcionDesnutricion(){
    this.navCtrl.push("DescripcionDesnutricionPage");
  }
  ir_DescripcionConsejoI(){
    this.navCtrl.push("DescripcionConsejoIPage");
  }
  ir_DescripcionConsejoII(){
    this.navCtrl.push("DescripcionConsejoIiPage");
  }
  
  
  

}


