import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import { NinosPage } from "../ninos/ninos";
import { TabsPage } from "../tabs/tabs";


// Graficos

// import  chartJs  from "chart.js";
import * as chartJs from 'chart.js'; 
import { OnInit  } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';


@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  tab1=TabsPage;
  ValImc:any;
  imc:number;

  // @ViewChild('barCanvas') barCanvas;
  // @ViewChild('lineCanvas') lineCanvas;
  // @ViewChild('pieCanvas') pieCanvas;
  // @ViewChild('doughnutCanvas') doughnutCanvas;

  barChart:any;
  lineChart:any;
  pieChart:any;
  doughnutChart:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController) {

   

    this.ValImc = navParams.get('FormNinos');
  }

  public doughnutChartLabels:string[]=['NormoPeso','Desnutricion','Malnutricion'];
  public doughnutChartData:number[]=[1200,1500,2000];
  public doughnutChartType:string='doughnut';



// ----------------------------------Grafico de lineas-------------------------------

public lineChartData: ChartDataSets[] = [
  // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  { data: [0,18], label: 'Series C', yAxisID: 'y-axis-1' }
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
        value: 18,
        borderColor: 'orange',
        borderWidth: 2,
        label: {
          enabled: true,
          fontColor: 'orange',
          content: 'LineAnno'
        }
      },
    ],
  },
};
public lineChartColors: Color[] = [
  // { // grey
  //   backgroundColor: 'rgba(148,159,177,0.2)',
  //   borderColor: 'rgba(148,159,177,1)',
  //   pointBackgroundColor: 'rgba(148,159,177,1)',
  //   pointBorderColor: '#fff',
  //   pointHoverBackgroundColor: '#fff',
  //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  // },
  // { // dark grey
  //   backgroundColor: 'rgba(77,83,96,0.2)',
  //   borderColor: 'rgba(77,83,96,1)',
  //   pointBackgroundColor: 'rgba(77,83,96,1)',
  //   pointBorderColor: '#fff',
  //   pointHoverBackgroundColor: '#fff',
  //   pointHoverBorderColor: 'rgba(77,83,96,1)'
  // },
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
