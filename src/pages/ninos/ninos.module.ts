import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NinosPage } from './ninos';

@NgModule({
  declarations: [
    NinosPage,
  ],
  imports: [
    IonicPageModule.forChild(NinosPage),
  ],
})
export class NinosPageModule {}
