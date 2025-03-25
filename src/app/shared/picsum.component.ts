import {booleanAttribute, Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-picsum',
  imports: [],
  template: `
    <img
      [class]="{
            'border-4': border(),
            'border-sky-400': border(),
            }"
      [src]="url()"
      [alt]="alt()" />
  `,
  styles: ``
})
export class PicsumComponent {
  alt = input.required<string>()
  width = input(300)
  height = input(300)
  border = input(false, { transform: booleanAttribute })
  grayscale = input(false, { transform: booleanAttribute })

  url = computed( () => {
    const w = this.width()
    const h = this.height()
    const grayscale = this.grayscale() ? '?grayscale' : ''

    return `https://picsum.photos/${w}/${h}${grayscale}`
  })

}
