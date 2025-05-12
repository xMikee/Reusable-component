import {Component, EventEmitter, input, model, output, Output, signal} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="w-2xs">
      <div
        (click)="toggle()"
        class="cursor-pointer flex items-center justify-between p-3 border bg-slate-600 text-white border-slate-600">
        <h1>{{title()}}</h1>
        @if(icon()){
            <button (click)="iconHandler($event)">
              {{icon()}}</button>
        }
      </div>


        <div class="border borde-slate-700 text-black bg-white content overflow-hidden duration-300 ease-in-out transition-all"
        [class.p-3]="Opened()"
        [class]="Opened() ? 'h-auto' : 'h-0'"
        >
          <ng-content></ng-content>
        </div>


    </div>

  `,
  styles: ``
})
export class CardComponent {
  iconClick = output()
  title = input<string>('')
  icon = input<string>('')
  Opened = model(false)

  toggle() {
    this.Opened.update(prev => !prev)
  }

  iconHandler(event: MouseEvent) {
    event.stopPropagation()
    this.iconClick.emit()

  }
}
