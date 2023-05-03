import { Component, inject } from '@angular/core';
import { Service } from './app.service';

@Component({
  selector: 'app-component',
  template: `
    <p>{{computed()}}</p>
    <div *ngFor="let a of array()">{{a}}</div>
    <p>{{object().number}} {{object().string}}</p>
    <app-button [name]="set"></app-button>
    <app-button [name]="update"></app-button>
    <app-button [name]="mutate"></app-button>
  `,
})
export class AppComponent {
  set = 'set';
  update = 'update';
  mutate = 'mutate';

  /** Nem kell constructorban felvenni a dolgokat, lehet így injectálni. */
  service = inject(Service);

  /** Signalok felvétele. Ha használni kell valahol kell a végére (). */
  computed = this.service.computed;
  array = this.service.array;
  object = this.service.object;
}
