import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  correo:string = "";
  contrasena:string= "";
  home:any = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _us:UsuarioProvider, private viewCtrl:ViewController,) {
  }

  ingresar(){
    this._us.ingresar(this.correo , this.contrasena)
    if (this._us.activo()) {
      this.viewCtrl.dismiss(true);
    }
    // this.navCtrl.push(this.home);

    
  }
}
