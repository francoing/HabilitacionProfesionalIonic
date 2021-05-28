import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// url
import { URL_SERVICIOS } from "../../config/url.servicios";

import { AlertController,Platform } from "ionic-angular";
import { Storage } from '@ionic/storage';




@Injectable()
export class EncargadosProvider {

  constructor(public http: HttpClient,
    private alertCtrl:AlertController,) {
   
  }

  nombre:string="";
  dni:string="";
  direccion:string="";
  telefono:string="";

  saveData(nombre:string,direccion:string,dni:string,telefono:string){

    let data = new FormData();
    data.append("name",nombre);
    data.append("dni",dni);
    data.append("direccion",direccion);
    data.append("telefono",telefono);
    let url = URL_SERVICIOS + "encargado";
    return this.http.post( url, data )
      .subscribe( (resp:any) =>{
        let data_resp = resp;
        console.log(data_resp);
        if ( data_resp.error) {
          this.alertCtrl.create({
            title: "Error al Registrar Usuario",
            subTitle: data_resp.mensaje,
            buttons: ["Ok"]
            
          }).present();
        } else {

          this.alertCtrl.create({
            title: "Encargado Creado",
            subTitle: data_resp.mensaje,
            buttons: ["Ok"]
            
          }).present();

          this.nombre = data_resp.name;
          this.dni= data_resp.dni;
          this.direccion = data_resp.direccion;
          this.telefono= data_resp.telefono;

          //guardar storage
          // this.guardar_storage();

        }

      });


  }


}
