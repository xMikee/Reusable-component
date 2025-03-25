import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PicsumComponent} from './shared/picsum.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PicsumComponent],
  template: `

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
  title = 'reusable-component';
}
