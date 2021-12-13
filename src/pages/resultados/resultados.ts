import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import { NinosPage } from "../ninos/ninos";
import { TabsPage } from "../tabs/tabs";


// Graficos

// import  chartJs  from "chart.js";
import * as chartJs from 'chart.js'; 
import { OnInit  } from '@angular/core';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, BaseChartDirective, Label } from 'ng2-charts';

import { multi } from './data';

import { ChartDataSets,ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  tab1=TabsPage;
  ValImc:any;
  imc:number;

  // Data
  chartData: ChartDataSets[] = [{ data: [], label: 'IMC' }];
  chartLabels: Label[] = ['5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
 
  // Options
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Grafico de persentilamiento'
    },
    // Desliza el grafico
    pan: {
      enabled: false,
      mode: 'xy'
    },
    zoom: {
      enabled: false,
      mode: 'xy'
    }
  };
  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#ff00ff'
    }
  ];
  chartType = 'line';
  showLegend = true;
 
  // For search
  stock = '';
 
//  ------------------------------------------------Servicio De Precios-----------------------------------------------------------------------
  // getData() {
  //     this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2018-03-12&to=2019-03-12`).subscribe(res => {
  //     const history = res['historical'];
 
  //     this.chartLabels = [];
  //     this.chartData[0].data = [];
 
  //     for (let entry of history) {
  //       this.chartLabels.push(entry.date);
  //       this.chartData[0].data.push(entry['close']);
  //     }
  //   });
  // }
 
  // typeChanged(e) {
  //   const on = e.detail.checked;
  //   this.chartType = on ? 'line' : 'bar';
  // }

  
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController,private http: HttpClient) {

  //  Object.assign(this, { multi });

    this.ValImc = navParams.get('FormNinos');
  }

  // public doughnutChartLabels:string[]=['NormoPeso','Desnutricion','Malnutricion'];
  // public doughnutChartData:number[]=[1200,1500,2000];
  // public doughnutChartType:string='doughnut';



// ----------------------------------Grafico de lineas-------------------------------

public lineChartData: ChartDataSets[] = [
  // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  { data: [18,18.2,19,19.5,20,21,22,22.5,24,25.7,26.3,27,28,28.5,29.2], label: '97', yAxisID: 'y-axis-1' },
  { data: [16.4,16.5,16.6,16.8,18,18.3,19,20,21,22,22.5,23,24,25,25.7], label: '85', yAxisID: 'y-axis-0' }
];
public lineChartLabels: Label[] = ['5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
public lineChartOptions: (ChartOptions & { annotation: any }) = {
  responsive: true,
  scales: {
    // We use this empty structure as a placeholder for dynamic theming.
    xAxes: [{}],
    yAxes: [
      {
        id: 'y-axis-0',
        position: 'left',
        
      },
      {
        id: 'y-axis-1',
        position: 'right',
        gridLines: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          fontColor: 'red',
          beginAtZero:true,
        }
      }
    ]
  },
  annotation: {
    annotations: [
      {
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: "",
        borderColor: 'orange',
        borderWidth: 2,
        label: {
          enabled: false,
          fontColor: 'orange',
          content: 'LineAnno',
          
        }
      },
    ],
  },
};
public lineChartColors: Color[] = [
  
  { // red
    backgroundColor: 'rgba(255,0,0,0.3)',
    borderColor: 'red',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
public lineChartLegend = true;
public lineChartType = 'line';
public datasets= {
  data:[10,12,14,16,18,20,22,24,26,28,30,32],
} 
// public lineChartPlugins = [pluginAnnotations];

// -------------------/Graficos de lineas---------------------------------------
  

 

  mostrar_modalNinos(){
    
    this.modalCtrl.create(NinosPage).present();

  }
  irRoot(){
    this.navCtrl.push(this.tab1);

  }

  CalcularImc(){
  //  console.log(this.ValImc.nombre);

   return this.imc =Number(this.ValImc.peso / (this.ValImc.talla * this.ValImc.talla));
   

  }

   informarImc(imc: number): string{
    if(imc < 16)
      return "Delgadez severa";
    else if(imc < 17)
      return "Delgadez moderada";
    else if(imc < 18.5)
      return "Delgadez leve";
    else if(imc < 25)
      return "Sano";
    else if(imc < 30)
      return "Sobrepeso";
    else if(imc < 35)
      return "Obesidad grado I";
    else if(imc < 40)
      return "Obesidad grado II (Severa)";
    else
      return "Obesidad grado III (Mórbida)";

  }
  
}
