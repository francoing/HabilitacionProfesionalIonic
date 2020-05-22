import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController, Platform, AlertController } from 'ionic-angular';
import { UsuarioProvider } from '../usuario/usuario';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the DatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatosProvider {

  constructor(public http: HttpClient,
     private _us:UsuarioProvider,
    private modalCtrl:ModalController,
     private alertCtrl:AlertController,
    private platform:Platform,
    private storage: Storage,) {
    console.log('Hello DatosProvider Provider');
  }

  // ver_carrito(){

  //   let modal:any;
  //   if (this._us.token) {
  //     //mostrar la pagina del carrito por que trae el token del usuario
  //    modal= this.modalCtrl.create(HomePage);

  //   } else {
  //     //mostrar el login por que no esta logeado
  //    modal= this.modalCtrl.create(LoginPage);
      
  //   }
  //   modal.present();
  //   //una vez que se logea muestra el carrito 

  //   // le decimos que el carrito tiene un valor buleano true y abre el carrito
  //   modal.onDidDismiss( (abrirCarrito:boolean)=>{

  //     if (abrirCarrito) {
  //       this.modalCtrl.create(HomePage).present();
        
  //     }


  //   })

  // }


}
