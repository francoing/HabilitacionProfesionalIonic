import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiagnosticosPage } from './diagnosticos';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DiagnosticosPage,
  ],
  imports: [
    IonicPageModule.forChild(DiagnosticosPage),
    ChartsModule,
  ],
})
export class DiagnosticosPageModule {}
