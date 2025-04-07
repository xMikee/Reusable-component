import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PicsumComponent} from './shared/picsum.component';
import {StaticMapComponent} from './shared/static-map/static-map.component';
import {TitleComponent} from './shared/title.component';
import {ButtonComponent, Variants} from './shared/button/button.component';
import {ButtonGroupComponent} from './shared/button-group.component';
import {SidebarPanelComponent} from './shared/sidebar-panel.component';
import {CardComponent} from './shared/card.component';

type MapLocation = {
  lat: number;
  lng: number;
  zoom: number;
  maptype: 'terrain' | 'light';
}

type Buttons = {
  label: string;
  url: string;
  variant: Variants;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PicsumComponent, StaticMapComponent, TitleComponent, ButtonComponent, ButtonGroupComponent, SidebarPanelComponent, CardComponent],
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
    <hr>
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
    <hr>
    <div class="max-w-screen-sm mx-6 sm:mx:auto">
      <app-title/>
      <app-title size="sm" underline >Text SM</app-title>
      <app-title size="md">TEXT MD</app-title>
      <app-title size="xl">TEXT XL</app-title>
    </div>
    <hr>
    <hr>
    <div class="max-w-screen-sm mx-6 sm:mx:auto">
      <app-button-group [gap]="2" borders wrap align="center">
        @for (button of buttons; track $index) {
            <app-button
              [url]="button.url"
              [variant]="button.variant"
            >{{button.label}}</app-button>
        }
      </app-button-group>
    </div>

    <hr class="my-3">
    <div class="flex justify-end">
      <button (click)="isOpen.set(true)" class="btn"> OPEN PANEL </button>
    </div>

    <app-sidebar-panel
      title="My Panel"
      [(isOpen)]="isOpen"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida at mi eget congue. Vivamus ultricies vehicula diam non volutpat. Cras porta eget eros et ornare. Quisque volutpat porttitor diam, at mattis velit volutpat vitae. Ut tincidunt lorem leo, eu pharetra risus placerat sed. Aliquam mollis quam vel dignissim sollicitudin. Vestibulum ligula nibh, mollis egestas nunc id, volutpat efficitur massa. Donec lectus turpis, pulvinar vitae vestibulum eu, laoreet sit amet augue. Integer eleifend leo vitae gravida luctus. Suspendisse tincidunt massa venenatis, blandit erat tempor, suscipit tellus.
    </app-sidebar-panel>

    <hr class="py-5">
    <app-card/>
    <router-outlet />
  `,
})
export class AppComponent {
  locattion : MapLocation = {
    lat : 40.827035,
    lng : 16.551901,
    zoom: 17,
    maptype: 'light'
  }

  doSomething() {
    window.alert('clicked')
  }

  buttons : Buttons[] = [
    {
      label: 'Primary',
      url: 'https://michelepicerno.it',
      variant: 'primary',
    },
    {
      label: 'Secondary',
      url: '/about',
      variant: 'secondary',
    },
    {
      label: 'Accent',
      url: '/about',
      variant: 'accent',
    },
    {
      label: 'Info',
      url: 'https://michelepicerno.it',
      variant: 'info',
    }
  ]

  isOpen = signal(false);
}

