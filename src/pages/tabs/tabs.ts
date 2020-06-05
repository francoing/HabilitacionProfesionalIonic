import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UbicacionPage } from '../../pages/ubicacion/ubicacion';
import { HomePage } from '../home/home';
import { BusquedaPage } from '../busqueda/busqueda';

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
  tab3:any;
  constructor(public navCtrl: NavController) {
    this.tab1 = HomePage;
    this.ubicacion = UbicacionPage;
    this.tab3=BusquedaPage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
