import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, AlertController, Platform  } from 'ionic-angular';
import leaflet from 'leaflet';
import { reduce } from 'rxjs/operator/reduce';
 
@Component({
  selector: 'ubicacion-home',
  templateUrl: 'ubicacion.html',
  
})
export class UbicacionPage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  
  map: any;
  ubicationUser:any=[];
  comedor1:any = [
    {
      latitude:-26.834722,
      longitude:-65.2527723,
     
      
    }]
    comedor2:any=[
    {
      latitude: -26.8340416,
      longitude:-65.2567466,
    }]
    comedor3: any =[
    {
      latitude: -26.8340317,
      longitude:-65.2585252,
    } ]
  constructor(public navCtrl: NavController, public alrtCtrl: AlertController) {
    
  }
  

  ngOnInit(){
    this.loadmap()
  }
 
   loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
    setView: true,
    maxZoom: 16,
  }).on('locationfound', (e) => {
    let markerGroup  = leaflet.featureGroup();
    this.ubicationUser= e;
    //let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
      //alert('Marker clicked')
     //})
    //markerGroup.addLayer(marker);

    this.comedor1.forEach(c => {
      let marker = leaflet.marker([c.latitude, c.longitude]).bindPopup('Merendero Nuestra Señora de la Plegaria <br> malabia 648')
      .openPopup();
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    }),
    this.comedor2.forEach(c => {
      let marker = leaflet.marker([c.latitude, c.longitude]).bindPopup('Merendero El Jubileo<br> Adolfo de la Vega 754')
      .openPopup();
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    }),
    this.comedor3.forEach(c => {
      let marker = leaflet.marker([c.latitude, c.longitude]).bindPopup('Comedor Santa Rita <br> Gorriti 675')
      .openPopup();
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    })
  })
  }

  addMarker(){
    //let alert = this.alrtCtrl.create()
    console.log('ubication', this.ubicationUser)
    let marker = leaflet.marker([this.ubicationUser.latitude, this.ubicationUser.longitude]).bindPopup('Mi Ubicacion')
    .openPopup();
    
    this.map.addLayer(marker);
    

    
    
  }
  
}

