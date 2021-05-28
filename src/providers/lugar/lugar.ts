import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL_SERVICIOS } from "../../config/url.servicios";

import { AlertController,Platform } from "ionic-angular";
import "rxjs/add/operator/map";

@Injectable()
export class LugarProvider {

  constructor(public http: HttpClient,
    private alertCtrl:AlertController) {
    console.log('Hello LugarProvider Provider');
  }

  nombre:string="";
  direccion:string="";
  cantidad_ni:string="";
  encargado_id:string="";
  encargados:any[]=[];

  enviarData(nombre:string,direccion:string,cantidad_ni:string,encargado_id:string){


    let data = new FormData();
    data.append("nombre",nombre);
    data.append("direccion",direccion);
    data.append("cantidad_ni",cantidad_ni);
    data.append("encargado_id",encargado_id);
    let url = URL_SERVICIOS + "lugar";
    return this.http.post( url, data )
      .subscribe( (resp:any) =>{
        let data_resp = resp;
        console.log(data_resp);
        if ( data_resp.error) {
          this.alertCtrl.create({
            title: "Error al Registrar Lugar",
            subTitle: data_resp.mensaje,
            buttons: ["Ok"]
            
          }).present();
        } else {

          this.alertCtrl.create({
            title: "Lugar Registrado con Exito",
            subTitle: data_resp.mensaje,
            buttons: ["Ok"]
            
          }).present();

          this.nombre = data_resp.nombre;
          this.direccion= data_resp.direccion;
          this.cantidad_ni = data_resp.cantidad_ni;
          this.encargado_id= data_resp.encargado_id;

          //guardar storage
          // this.guardar_storage();

        }

      });
  }

  cargarEncargados(){


    let url = URL_SERVICIOS + "obtenerencargados";

    this.http.get(url)
          .map( data => data )
          .subscribe((data:any)=>{
            console.log(data);
      
      if (data.error) {
      console.log(data.error);
      
        
      } else {
      
        this.encargados.push(...data['encargados']);
        console.log(this.encargados);
      }
      })
      
}

}
