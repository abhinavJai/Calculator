import { Component } from '@angular/core';

enum Operator {
  ADD = 'ADD',
  SUBTRACT = 'SUBTRACT',
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE',
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  previousNum: string = null;
  currentNum = '0';
  operator: Operator = null;
  latestClickedNumber: number = null;
  lastClickedButton: string = null;

  click(n: number) {
    this.latestClickedNumber = n;
    if (this.lastClickedButton in Operator || this.currentNum === '0') {
      this.currentNum = n.toString();
    } else this.currentNum = this.currentNum.concat(n.toString());

    this.lastClickedButton = n.toString();
  }

  /**
   * Resets the calculator back to original state.
   */
  allClear(): void {
    this.currentNum = '0';
    this.previousNum = null;
    this.operator = null;
  }
}
