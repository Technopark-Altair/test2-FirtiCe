import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public firstN: number;
  public secondN: number;
  public firstO: string;
  public secondO: string;
  public result: string;

  click() {
    if (this.firstO == null || this.secondO == null) {
      this.result = 'Не указаны операторы';
    } else if (this.firstN == null || this.secondN == null) {
      this.result = 'Не указаны числа';
    } else if (this.firstN > 1 || this.secondN > 1 || this.firstN < 0 || this.secondN < 0) {
      this.result = 'Число не может быть меньше нуля или больше 1';
    } else {
      if (this.firstO === '!' && this.secondO === '&&') {
        this.result = (!(this.firstN && this.secondN)).toString();
      } else if (this.firstO === '!' && this.secondO === '||') {
        this.result = (!(this.firstN || this.secondN)).toString();
      } else {
        this.result = 'Ошибка вычислений';
      }
    }
  }
}
