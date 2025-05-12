import {Component, input, model} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="w-2xs">
      <div (click)="toggle()">
        <ng-content select="app-card-title"></ng-content>
      </div>


      @if(Opened()){
        <div class="border borde-slate-700 text-black bg-white content overflow-hidden duration-300 ease-in-out transition-all">
          <ng-content select="[appCardBody]"></ng-content>
        </div>
        <div class="footer border-t border-slate-700 text-black bg-white">
          <ng-content select="app-card-footer"></ng-content>
        </div>
      }

    </div>

  `,
  styles: ``
})
export class CardComponent {

  title = input<string>('')
  Opened = model(false)

  toggle() {
    this.Opened.update(prev => !prev)
  }
}
