import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()"></app-title>

    <h1>frameworkAsSignal</h1>
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <br />
    <h1>frameworkAsProperty</h1>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      //this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
      console.log('Done');
    }, 3000);
  }
}
