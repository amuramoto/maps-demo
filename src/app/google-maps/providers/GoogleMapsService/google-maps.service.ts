import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  
  is_loaded: boolean = false;

  constructor() {
    // if (!this.is_loaded) this.loadMapsLib();    
  }


  private setIsLoaded(state: boolean): void {
    this.is_loaded = state;
  }

  private getIsLoaded(): boolean {
    return this.is_loaded;
  }

  private loadMapsLib() {
    // console.log(this.api_key);
    // this.http.get('https://maps.googleapis.com/maps/api/js?' + GOOGLE_MAPS_API_KEY);
    let script = document.createElement('script');
    script.type = 'text/javascript';
    this.setIsLoaded(true);
  }

  getApiKey (): string {
    console.log(GOOGLE_MAPS_API_KEY)''
    return GOOGLE_MAPS_API_KEY;
  }

}

export var GOOGLE_MAPS_API_KEY: string;