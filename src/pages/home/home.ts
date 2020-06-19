import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { EncargadoPage } from '../encargado/encargado';
import { DietasPage } from '../dietas/dietas';
import { DiagnosticosPage } from '../diagnosticos/diagnosticos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private modalCtrl:ModalController) {

  }

  mostrar_modal(){

    //primera forma
    this.modalCtrl.create(LugarPage).present();

    //segunda forma
    // aqui le enviamos entre llaves dos parametros que son el nombre y la edad al modal que estara para recibirlos 

    //   let modal =this.modalCtrl.create(LugarPage,{nombre:"Fernando",edad:30});

    //   modal.present();


    //   // con este metodo hacemos que el modal se cierre con los parametros enviados del modal
    //   //los mostramos por consola 
    //   modal.onDidDismiss(parametros=>{

    //       if (parametros) {
    //         console.log("Data del modal:");
    //         console.log(parametros);
    //       }else{
    //         console.log("Se cerro sin parametros");
    //     }
            
    // })


  }

  mostrar_modalEncargados(){
    
    this.modalCtrl.create(EncargadoPage).present();
  }
  mostrar_modalDietas(){
    
    this.modalCtrl.create(DietasPage).present();

  }
  mostrar_modalDiagnosticos(){
    
    this.modalCtrl.create(DiagnosticosPage).present();

  }

}
