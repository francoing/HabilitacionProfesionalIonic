import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators , FormArray} from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-ninos',
  templateUrl: 'ninos.html',
})
export class NinosPage {
  FormNinos: FormGroup;
  ListaNinos:any=[];
  lugar:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder, private modalCtrl:ModalController) {
    this.FormNinos = this.createFormNinos();
    this.lugar = navParams.get('myForm');
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

  mostrar_modalNinos(){
    
    this.modalCtrl.create(NinosPage).present();

  }

  // private createFormNinos(){
  //   return this.formBuilder.group({
  //     nombre: ['', Validators.required],
  //     direccion: ['', Validators.required],
  //     dni: ['', Validators.required],
  //     peso: ['', Validators.required],
  //     talla: ['', Validators.required],
  //     edad: ['', Validators.required],
  //     fechaNac: ['', Validators.required],
  //     ninos:this.formBuilder.array([])				
  //   });
  // }

//   private fb: FormBuilder = new FormBuilder()
//   profileForm = this.fb.group({
    
//     ninos: this.fb.array([
//       this.fb.control('')
//     ])
//   })

//   get ninos(){
//     return this.profileForm.get("ninos") as FormArray;
//   } 


// addNinos(){
//   // let fg = this.formBuilder.group(new NinosPage);
//   this.ninos.push(this.fb.control(''));
//   // this.ninosFormArray.push(fg);     
// }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad NinosPage');
//   }

//   agregar_ninos(){
//     this.ListaNinos.push(this.FormNinos);
//     console.log('Se agrego al array');

//     this.ListaNinos.forEach(nino => {
//       console.log(nino);
      
//     });
    

//   }

}
