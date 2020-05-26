import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UbicacionPage } from '../../pages/ubicacion/ubicacion';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  ubicacion:any;
  
  constructor(public navCtrl: NavController) {
    this.tab1 = HomePage;
    this.ubicacion = UbicacionPage;

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
