import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PicsumComponent} from './shared/picsum.component';
import {StaticMapComponent} from './shared/static-map/static-map.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PicsumComponent, StaticMapComponent],
  template: `


    <div class="max-w-screen-sm mx-6 sm:mx:auto">
      <div class="flex gap-2 my-3">
        <button (click)="locattion.maptype = 'terrain'" class="btn btn-info">Terrain</button>
        <button (click)="locattion.maptype = 'light'" class="btn btn-info">Light</button>
        <button (click)="locattion.zoom = locattion.zoom + 1" class="btn btn-info">+</button>
        <button (click)="locattion.zoom = locattion.zoom - 1" class="btn btn-info">-</button>
      </div>
      <app-static-map
        [width]="1000"
        [height]="500"
        [lat]="locattion.lat"
        [lng]="locattion.lng"
        [zoom]="locattion.zoom"
        [maptype]="locattion.maptype"
      />
    </div>

    <div class="max-w-screen-sm mx-6 sm:mx:auto">
      <app-picsum
      [width]="500"
      [height]="500"
      alt="Image 1"
      />
      <app-picsum
      alt="Image Preview 2"
      border
      grayscale
      />
    </div>



    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  locattion : MapLocation = {
    lat : 40.827035,
    lng : 16.551901,
    zoom: 17,
    maptype: 'light'
  }
}
type MapLocation = {
  lat: number;
  lng: number;
  zoom: number;
  maptype: 'terrain' | 'light';
}
