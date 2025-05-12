import {Component, input, model, output} from '@angular/core';

@Component({
  selector: 'app-card-title',
  imports: [],
  template: `
    <div class="cursor-pointer flex items-center justify-between p-3 border bg-slate-600 text-white border-slate-600">
      <h1>
        <ng-content></ng-content>
      </h1>
      <ng-content select="app-card-icon"></ng-content>
    </div>

  `,
  styles: ``
})
export class CardTitleComponent {


}
