import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { NavController, AlertController, Select, Platform  } from 'ionic-angular';
import { Title } from '@angular/platform-browser';
import { platform } from 'chart.js';

declare var google : any;

@Component({
  selector: 'page-ubicacion',
  templateUrl: 'ubicacion.html',
})
export class UbicacionPage implements OnInit {
  @ViewChild('map') mapRef: ElementRef;
  @ViewChild('myComedor') myComedor: Select;
  map: any;
  directionsService = new google.maps.DirectionsService(); //variable que entrega la ruta optima
  directionsDisplay = new google.maps.DirectionsRenderer(); //variable que se encarga de renderizar la ruta

  location:any={ 
    lat:0,
    lng:0
  }

  comedorwalkMarker : any;
  infoWindows: any =[];
  info : any;

  comedores:any = {
    "Comedor Santa Rita - MENDOZA 1001": {lat:-26.834722,lng:-65.2527723},
    "Comedor La Nueva Esperanza - Sala y Valdez 190":  {lat:-26.8340416,lng:-65.2567466},
    "Merendero San Expedito - Chacabuco 1070":  {lat:-26.8340317,lng:-65.2585252},  
  }


  comedoresKey:any;

  constructor(
    private geolocation: Geolocation,
    public navCtrl: NavController, 
    public alrtCtrl: AlertController,
    private launchNavigator: LaunchNavigator,
    public platform: Platform
    ) {
  }

 
  ngOnInit() {
    this.addMyPosition();
    this.comedoresKey = Object.keys(this.comedores);
  
  }
  

    loadMap(location:any) {
      // create a new map by passing HTMLElement
      const mapEle: HTMLElement = document.getElementById('map');
      // create LatLng object
      //const myLatLng = {lat: 4.658383846282959, lng: -74.09394073486328};
      // create map
      this.map = new google.maps.Map(mapEle, {
        center: location,
        zoom: 15
      });
    
      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        //this.addMarker(location);
        this.addComedoresMarkers();
        mapEle.classList.add('show-map');
      });
      this.directionsDisplay.setMap(this.map);

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map');
        
      });
    }

    

    addComedoresMarkers(){
      Object.keys(this.comedores).forEach(c => {
        this.comedorwalkMarker = new google.maps.Marker({
          draggable: false,
          animation: google.maps.Animation.DROP,
          position :this.comedores[c],
          title: c,
        });
        this.comedorwalkMarker.setMap(this.map);
        this.addInfoWindowToMarker(this.comedorwalkMarker);
      })
    }

    addInfoWindowToMarker(marker){
      let infoMarker = marker['info'];    
      console.log('mark', marker);
      let infoWindowContent =
      "<div id=container style='color:#000;background-color:#fff;padding:5px;display: grid;grid-template-columns: 1fr;grid-template-rows: 1fr;'>"+
        "<h4 id=text style='margin:0px'>"+marker.title+"</h4>"+
      "</div>";
  
      let infoWindow = new google.maps.InfoWindow({
        content : infoWindowContent,
        info: marker
      });
  
      google.maps.event.addListenerOnce(infoWindow,'domready', ()=>{
        //console.log('esteEs', infoWindow.info);
        this.info = infoWindow.info;
      })
  
      marker.addListener('click', ()=>{
        console.log('aquiiii', marker);
        infoWindow.open(this.map, marker)
      })
      this.infoWindows.push(infoWindow);
    }

    //cerrar infoWindow
  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  goToLocal(local){
    console.log('local', local);
    const  latLng = [this.comedores[local].lat,this.comedores[local].lng]
    let options: LaunchNavigatorOptions = {
      start:[this.location.lat,this.location.lng],
      app: this.launchNavigator.APP.USER_SELECT,
    };
    this.launchNavigator.navigate(latLng).then(success=>{
      console.log('success', success);
    }, error=>{
      console.log('error Launch', error);
    })
  }


    addMyPosition() {
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        console.log('response',resp.coords)
        this.location.lat = resp.coords.latitude;
        this.location.lng = resp.coords.longitude;
        this.loadMap(this.location);
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
        console.log('dataWatch',data);}).unsubscribe(); 
    }

    addMarker(){
      var marker = new google.maps.Marker({
        position:this.location,
        map: this.map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: {
        url: 'https://image.flaticon.com/icons/svg/70/70770.svg',
        scaledSize: new google.maps.Size(40, 40)
        },
        title: "Mi Ubicación"
      })
      this.addInfoWindowToMarker(marker)
      //create map
      marker.setMap(this.map);
      this.map.setCenter(this.location);
    }


    private calculateRoute(local) {  
      console.log('hola')                    //metodo para calcular la ruta optima
      this.directionsService.route({                //indicamos a directionsService que queremos calcular una ruta
        origin: this.location,
        destination: this.comedores[local],
        travelMode: google.maps.TravelMode.DRIVING,  //modo de viaje, caminando, conduciendo 
      }, (response, status)  => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response);
        } else {
          alert('Could not display directions due to: ' + status);
        }
      })
     ;
      }


      public rutaComedor(comedor){
        const ruta = comedor._value;
        console.log(this.platform);
        console.log("local",ruta);
        if(this.platform['_versions'].mobile){
          this.goToLocal(ruta)    
        }
        else{
          this.calculateRoute(ruta)
        }
      }

}
