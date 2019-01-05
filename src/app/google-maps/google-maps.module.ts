import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticMapComponent } from './components/static-map/static-map.component';
import { GoogleMapsService } from './providers/GoogleMapsService/google-maps.service';
import { GOOGLE_MAPS_API_KEY } from './providers/GoogleMapsService/google-maps.service';

@NgModule({
  declarations: [StaticMapComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StaticMapComponent
  ]
})
export class GoogleMapsModule { 
	static forRoot(key: string): ModuleWithProviders {
		return {
			ngModule: GoogleMapsModule,
			providers: [
				{ provide: GOOGLE_MAPS_API_KEY, useValue: key},
				GoogleMapsService				
			]
		}

	}
}
