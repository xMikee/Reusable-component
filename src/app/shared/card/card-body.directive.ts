import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardBody]',
  host:{
    class: 'p-3 bg-white text-black'
  }
})
export class CardBodyDirective {

  constructor() { }

}
