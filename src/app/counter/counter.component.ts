import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter: number = 10;
  public isDescreaseDisabled: boolean = false;

  increase(): void {
    this.counter++;
    this.toggleDisabled();
  }

  decrease(): void {
    this.counter--;
    this.toggleDisabled();
  }

  reset(): void {
    this.counter = 10;
    this.isDescreaseDisabled = false;
  }

  toggleDisabled(): void {
    if (this.counter > 0) {
      this.isDescreaseDisabled = false;
    } else if (this.counter === 0) {
      this.isDescreaseDisabled = true;
    }
  }
}
