import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
 
@Component({
  selector: 'ubicacion-home',
  templateUrl: 'ubicacion.html'
})
export class UbicacionPage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  ubicationUser:any=[];
  comedores:any = [
    {
      latitude:-26.834722,
      longitude:-65.2527723,
    },
    {
      latitude: -26.8345033,
      longitude:-65.2531322,
    } 
    ,
    {
      latitude: -26.8340317,
      longitude:-65.2585252,
    } 

  ]
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

    this.comedores.forEach(c => {
      let marker = leaflet.marker([c.latitude, c.longitude]).on('click', () => {
        alert('Merendero1')
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    })
  })
  }

  addMarker(){
    //let alert = this.alrtCtrl.create()
    console.log('ubication', this.ubicationUser)
    let marker = leaflet.marker([this.ubicationUser.latitude, this.ubicationUser.longitude]).on('click', () => {
      alert('Tu ubicación')
    })
    this.map.addLayer(marker);
  }
}
 