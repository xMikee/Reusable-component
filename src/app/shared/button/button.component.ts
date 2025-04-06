import {Component, computed, input} from '@angular/core';

export type Variants = 'primary'|'secondary'|'info' |'accent';
@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <a [href]="url()" class="btn"
        [target] = targetCls()
        [class.btn-primary]="variant() === 'primary'"
        [class.btn-secondary]="variant() === 'secondary'"
        [class.btn-info]="variant()  === 'info'"
    >
      <ng-content></ng-content>
    </a>
  `,
  styles: ``
})
export class ButtonComponent {

  variant = input<Variants>('primary');
  url = input('');

  targetCls = computed( () =>{
    return this.url().includes('http')
      ? '_blank'
      : '_self'
  })
}
