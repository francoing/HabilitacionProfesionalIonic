import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, AlertController, Select  } from 'ionic-angular';
import * as Leaflet from 'leaflet';
import 'leaflet-routing-machine';
//import 'leaflet-easybutton';
declare var L: any;
//declare var Leaflet: any;

@Component({
  selector: 'ubicacion-home',
  templateUrl: 'ubicacion.html',
  
})
export class UbicacionPage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  @ViewChild('myselect') mySelect: Select;
  map: any;
  ubicationUser:any=[];
  routingControl = null;
  //comedorSelected:boolean=false;
  view:boolean=false;
  
  comedores:any = {
    "Comedor Santa Rita - MENDOZA 1001": {latitude:-26.834722,longitude:-65.2527723},
    "Comedor La Nueva Esperanza - Sala y Valdez 190":  {latitude:-26.8340416,longitude:-65.2567466},
    "Merendero San Expedito - Chacabuco 1070":  {latitude:-26.8340317,longitude:-65.2585252}, 
    
  }
  comedoresKey:any;
  constructor(public navCtrl: NavController, public alrtCtrl: AlertController) {
    
  }
  
  ngOnInit(){
    this.loadmap();
    this.comedoresKey = Object.keys(this.comedores);
  }
 
   loadmap() {
    this.map = Leaflet.map("map").fitWorld();
    Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
    setView: true,
    maxZoom: 16,
  }).on('locationfound', (e) => {
    let markerGroup  = Leaflet.featureGroup();
    this.ubicationUser= e;
    this.addComedoresMarkers(this.comedores, markerGroup);
  })
  }

  locationComedor(nameComedor){
    console.log(nameComedor);
  }

  addComedoresMarkers(data, elem){
    let comedores = Object.keys(data);
    comedores.forEach(c => {
      let marker = Leaflet.marker([data[c].latitude, data[c].longitude])
      .bindPopup(c)
      .openPopup();
      elem.addLayer(marker);
      this.map.addLayer(elem);
    })
  }

  removeRoutingControl = function () {
    if (this.routingControl != null) {
        this.map.removeControl(this.routingControl);
        this.routingControl = null;
    }
};
  selectAll(select: Select){
    console.log(select)
    let c = select._value;
    if(this.routingControl === null){
      this.routingControl = L.Routing.control({
        waypoints: [
          Leaflet.latLng(this.ubicationUser.latitude, this.ubicationUser.longitude),
          Leaflet.latLng(this.comedores[c].latitude,this.comedores[c].longitude)
        ],
        routeWhileDragging: true
      }).addTo(this.map);
      //this.comedorSelected = true;
    }else{
      this.map.removeControl(this.routingControl);
      this.routingControl = L.Routing.control({
        waypoints: [
          Leaflet.latLng(this.ubicationUser.latitude, this.ubicationUser.longitude),
          Leaflet.latLng(this.comedores[c].latitude,this.comedores[c].longitude)
        ],
        routeWhileDragging: true
      }).addTo(this.map);
    }
    this.map.setView([this.comedores[c].latitude, this.comedores[c].longitude], 17)
    Leaflet.marker([this.comedores[c].latitude,this.comedores[c].longitude])
    .addTo(this.map)
    .bindPopup(c)
    .openPopup();
  }

 // displayRoutes(){      - MOSTRAR RUTAS DINAMICAS - 
 //   this.view = !this.view;
 //   let element:any = document.getElementsByClassName('leaflet-routing-container')[0];    
 //   (this.view) ? element.style.display = "block" : element.style.display = "none"
 //   //console.log('elemt', element);
  //}

  addMarker(){
    //let alert = this.alrtCtrl.create()
    let radius = this.ubicationUser.accuracy;
    console.log('ubication', this.ubicationUser)
    
    Leaflet.marker([this.ubicationUser.latitude, this.ubicationUser.longitude])
    .addTo(this.map)
    .bindPopup('Mi Ubicacion')
    .openPopup();
    
    Leaflet.circle([this.ubicationUser.latitude, this.ubicationUser.longitude], radius)
    .addTo(this.map);
    //this.map.addLayer(marker);  

  }
  
  
}

