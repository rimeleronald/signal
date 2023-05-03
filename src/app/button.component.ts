import { Component, inject, Input } from '@angular/core';
import { Service } from './app.service';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="click()" [disabled]="name === 'set' ? false : boolean()">{{name}}</button>
  `,
})
export class ButtonComponent {
  /** Input kötelezővé tétele. */
  @Input({ required: true }) name = '';

  /** Nem kell constructorban felvenni a dolgokat, lehet így injectálni. */
  service = inject(Service);

  /** Signalok felvétele. Ha használni kell valahol kell a végére (). */
  number = this.service.number;
  string = this.service.string;
  boolean = this.service.boolean;
  array = this.service.array;
  object = this.service.object;

  click = () => {
    switch (this.name) {
      case 'set':
        this.set();
        break;
      case 'update':
        this.update();
        break;
      case 'mutate':
        this.mutate();
        break;
    }
  };

  /** Signal értékének beállítása. */
  set = () => {
    this.number.set(3);
    this.string.set('db');
    this.boolean.set(false);
    this.array.set([0, 1, 2]);
    this.object.set({ number: 5, string: 'valami' });
  };

  /** Signal értékének frissítése érték alapján. Új értéket kap. */
  update = () => {
    this.number.update((n) => n * 2);
    this.array.update((a) => a.map((e) => e * 2));
  };

  /** Signal értékének frissítése érték alapján. Meglévő érték átalakítása.*/
  mutate = () => {
    this.array.mutate((a) => a.push(a.length));
    this.object.mutate((o) => (o.number = o.number * 2));
  };
}
