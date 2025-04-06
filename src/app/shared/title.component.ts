import {booleanAttribute, Component, computed, input, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `
    <h1 [class.textsm]="size() === 'sm'"
        [class.textmd]="size() === 'md'"
        [class.textxl]="size() === 'xl'"
        [class.underline]="underlineCls()"
    >
      <ng-content>...</ng-content>
    </h1>
  `,
  styles: `
  .textsm {font-size: 20px;}
  .textmd {font-size: 30px;}
  .textxl {font-size: 40px;}
  `
})
export class TitleComponent {
  //@Input() size: 'sm' | 'md' | 'xl' = 'md';
  size = input<'sm'|'md'|'xl'>('sm');
  underline = input(false, {transform: booleanAttribute});

  underlineCls = computed(
    () => {
      return this.underline() ? 'underline' : '';
    }
  )
}
