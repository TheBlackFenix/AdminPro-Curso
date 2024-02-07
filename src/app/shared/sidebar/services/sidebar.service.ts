import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {}
  #collapse: WritableSignal<boolean> = signal<boolean>(true);
  #collapsable: WritableSignal<boolean> = signal<boolean>(true);
  get collapse() {
    return this.#collapse();
  }
  toggleCollapse(value: boolean) {
    this.#collapse.set(value);
  }
  get collapsable() {
    return this.#collapsable();
  }
  toggleCollapsable() {
    this.#collapsable.update(value => !value);
  }
}
