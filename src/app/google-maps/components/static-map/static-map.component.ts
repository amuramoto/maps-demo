import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../../providers/GoogleMapsService/google-maps.service';

@Component({
  selector: 'static-map',
  templateUrl: './static-map.component.html',
  styleUrls: ['./static-map.component.sass']
})
export class StaticMapComponent implements OnInit {
  src: string = 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=';

  constructor(private mapsService: GoogleMapsService) {
    console.log(this.mapsService);
    let key = this.mapsService.getApiKey();  
    console.log(this.src);
    this.src += key;
  }

  ngOnInit() {
  }

}
