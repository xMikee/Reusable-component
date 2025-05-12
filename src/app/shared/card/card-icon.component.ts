import {Component, output} from '@angular/core';

@Component({
  selector: 'app-card-icon',
  imports: [],
  template: `
    <button (click)="iconHandler($event)">
      <ng-content></ng-content>
    </button>
  `,
  styles: ``
})
export class CardIconComponent {
  iconClick = output()

  iconHandler(event: MouseEvent) {
    event.stopPropagation()
    this.iconClick.emit()

  }
}
