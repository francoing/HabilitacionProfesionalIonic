import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// paginas
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { LugarPage } from '../pages/lugar/lugar';
import { EncargadoPage } from '../pages/encargado/encargado';
import { NinosPage } from '../pages/ninos/ninos';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { ResultadosPage } from '../pages/resultados/resultados';
import { BusquedaPage } from '../pages/busqueda/busqueda';

// providers
import { UsuarioProvider } from '../providers/usuario/usuario';
import { DatosProvider } from '../providers/datos/datos';
// imports
import { HttpClientModule } from '@angular/common/http';
//almacenamiento
import { IonicStorageModule } from '@ionic/storage';

// Graficos
// import { ChartsModule } from 'ng2-charts';
import  {  ChartsModule  }  from  'ng2-charts-x' ;















@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    LugarPage,
    EncargadoPage,
    NinosPage,
    UbicacionPage,
    ResultadosPage,
    BusquedaPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    ChartsModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    LugarPage,
    EncargadoPage,
    NinosPage,
    UbicacionPage,
    ResultadosPage,
    BusquedaPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    DatosProvider
  ]
})
export class AppModule {}
