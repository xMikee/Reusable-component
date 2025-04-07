import {booleanAttribute, Component, computed, input, model, signal} from '@angular/core';

@Component({
  selector: 'app-sidebar-panel',
  host: {
    '[class]' : 'getCls()'
  },
  template: `

      <div class="flex items-center justify-between py-2 border-b border-slate-600">
        <div class="titlenav text-2xl">{{title()}}</div>
        <button class="text-red-600 cursor-pointer" (click) = close()>X</button>
      </div>
      <ng-content></ng-content>
  `,
  styles: ``
})
export class SidebarPanelComponent {
  isOpen = model(false);
  title = input<string>('');

  close(){
    this.isOpen.set(false);
  }

  getCls = computed( () => {
    const baseCls = 'fixed w-60 text-black bg-slate-200 top-0 bottom-0 px-3 z-50 transition-all';
    const positionCls = this.isOpen() ? 'left-0' : '-left-60';
    return `${baseCls} ${positionCls}`
  })
}
