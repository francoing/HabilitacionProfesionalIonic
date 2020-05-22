import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NiñosPage } from './niños';

@NgModule({
  declarations: [
    NiñosPage,
  ],
  imports: [
    IonicPageModule.forChild(NiñosPage),
  ],
})
export class NiñosPageModule {}
