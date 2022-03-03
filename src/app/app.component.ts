import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  previousNum: number = null;
  currentNum = '0';
  latestClickedNumber: number = null;
  clickedItem: string;

  click(n: string) {
    localStorage.setItem('dataSource', n);
    // debugger;

    switch (n) {
      case '1':
        if (document.getElementById('myButtonn1').innerText !== '0') {
          document.getElementById('myButtonn1').innerText = '0';
        } else {
          document.getElementById('myButtonn1').innerText =
            localStorage.getItem('dataSource');
        }
        break;
      case '2':
        if (document.getElementById('myButtonn2').innerText !== '0') {
          document.getElementById('myButtonn2').innerText = '0';
        } else {
          document.getElementById('myButtonn2').innerText =
            localStorage.getItem('dataSource');
        }
        break;

      case '3':
        if (document.getElementById('myButtonn3').innerText !== '0') {
          document.getElementById('myButtonn3').innerText = '0';
        } else {
          document.getElementById('myButtonn3').innerText =
            localStorage.getItem('dataSource');
        }
        break;
      case '4':
        if (document.getElementById('myButtonn4').innerText !== '0') {
          document.getElementById('myButtonn4').innerText = '0';
        } else {
          document.getElementById('myButtonn4').innerText =
            localStorage.getItem('dataSource');
        }
        break;
      case '5':
        if (document.getElementById('myButtonn5').innerText !== '0') {
          document.getElementById('myButtonn5').innerText = '0';
        } else {
          document.getElementById('myButtonn5').innerText =
            localStorage.getItem('dataSource');
        }
        break;
      case '6':
        if (document.getElementById('myButtonn6').innerText !== '0') {
          document.getElementById('myButtonn6').innerText = '0';
        } else {
          document.getElementById('myButtonn6').innerText =
            localStorage.getItem('dataSource');
        }
        break;
      case '7':
        if (document.getElementById('myButtonn7').innerText !== '0') {
          document.getElementById('myButtonn7').innerText = '0';
        } else {
          document.getElementById('myButtonn7').innerText =
            localStorage.getItem('dataSource');
        }
        break;
      case '8':
        if (document.getElementById('myButtonn8').innerText !== '0') {
          document.getElementById('myButtonn8').innerText = '0';
        } else {
          document.getElementById('myButtonn8').innerText =
            localStorage.getItem('dataSource');
        }
        break;
      case '9':
        if (document.getElementById('myButtonn9').innerText !== '0') {
          document.getElementById('myButtonn9').innerText = '0';
        } else {
          document.getElementById('myButtonn9').innerText =
            localStorage.getItem('dataSource');
        }
        break;
    }
  }

  allClear(): void {
    this.currentNum = '0';
    this.previousNum = null;
  }
}
