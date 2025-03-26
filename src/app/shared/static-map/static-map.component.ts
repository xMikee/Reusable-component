import {Component, computed, input} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

const apikey = environment.apikey;
const urlMap = environment.urlMap;

const URL_GOOGLE = environment.URL_GOOGLE;
const API_GOOGLE = environment.API_GOOGLE;

@Component({
  selector: 'app-static-map',
  template: `
    @if (url()){
        <img [src]="url()" alt="Static Map" />
    }
  `,
})
export class StaticMapComponent {
  lat = input.required<number>();
  lng = input.required<number>();
  width = input<number>(200);
  height = input<number>(200);
  zoom = input<number>(10);
  maptype = input<'terrain'|'light'>('terrain');

  url = computed( () => {
    const params = new HttpParams()
      //.set('maptype', this.maptype())
      .set('size', `${this.width()}x${this.height()}`)
      .set ('center', `${this.lat()},${this.lng()}`)
      .set('markers',`size:mid|color:red|label:S|${this.lat()},${this.lng()}`)
      .set('zoom', `${this.zoom()}`)
      .set('key', API_GOOGLE);

    return `${URL_GOOGLE}?${params.toString()}`;
  })
}
