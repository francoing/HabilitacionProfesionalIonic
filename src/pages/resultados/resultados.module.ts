import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadosPage } from './resultados';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ResultadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultadosPage),
    ChartsModule,
  ],
})
export class ResultadosPageModule {}
