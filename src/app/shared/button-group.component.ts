import {booleanAttribute, Component, input} from '@angular/core';

@Component({
  selector: 'app-button-group',
  imports: [],
  template: `
    <div class="inline-flex rounded-xl p-3 my-3"
         [class.gap-1]="gap() === 1"
         [class.gap-2]="gap() === 2"
         [class.gap-4]="gap() === 4"
         [class.gap-8]="gap() === 8"
         [class.flex-wrap]="wrap()"
         [class.border]="borders()"
         [class.align-start]="align() === 'start'"
         [class.align-center]="align() === 'center'"
         [class.align-end]="align() === 'end'"
    >
        <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class ButtonGroupComponent {
  gap = input<1 | 2 | 4 | 8>(1)
  borders = input(false, { transform: booleanAttribute })
  wrap = input(false, { transform: booleanAttribute })
  align = input<'start' | 'center' | 'end'>('start')
}
