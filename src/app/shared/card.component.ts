import {Component, EventEmitter, input, output, Output, signal} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="w-2xs">
      <div class="cursor-pointer flex items-center justify-between p-3 border bg-slate-600 text-white border-slate-600">
        <h1
          (click)="toggle()"
        >{{title()}}</h1>
        @if(icon()){
            <button (click)="iconClick.emit()">
              {{icon()}}</button>
        }
      </div>

      @if (isOpen()) {
        <div class="border borde-slate-700 p-3 bg-white content">
          <ng-content></ng-content>
        </div>
      }

    </div>

  `,
  styles: ``
})
export class CardComponent {
  iconClick = output()
  title = input<string>('')
  icon = input<string>('')
  isOpen = signal(false)

  toggle() {
    this.isOpen.set(!this.isOpen())
  }
}
