import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';
 
@Component({
  selector: 'ubicacion-home',
  templateUrl: 'ubicacion.html'
})
export class UbicacionPage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
 
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
    maxZoom: 10
  }).on('locationfound', (e) => {
    let markerGroup  = leaflet.featureGroup();
    let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
      alert('Marker clicked')
    })
    markerGroup.addLayer(marker);
    this.map.addLayer(markerGroup);
  })

  }
}
 