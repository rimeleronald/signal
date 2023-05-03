import { computed, effect, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { Model } from './app.model';

@Injectable()
export class Service {
  /** Különböző típusú signalok. Kell nekik default value. */
  number = signal<number>(0);
  string = signal<string>('');
  boolean = signal<boolean>(true);
  array = signal<number[]>([]);
  object = signal<Model>({ number: 0, string: '' });

  /** Figyeli az összes benne lévő signal változását. */
  effect = effect(() => console.log(this.number()));

  /** Figyeli az összes benne lévő signal változását és ő maga is signal. */
  computed = computed(() => String(this.number()) + this.string());

  /** Observable signállá alakítása és vissza. */
  observable$ = interval(1000);
  toSignal = toSignal(this.observable$, { initialValue: 0 });
  toObservable = toObservable(this.toSignal);
}
