import { Component } from '@angular/core';

@Component({
  selector: 'bank-interest-app',
  templateUrl: './home.component.html',
})

export class AppComponent  {

  // sample data to start app
  amount = 100.29;
  allyMonths = 12;
  allyRate = 1;
  allyDays = 30;
  total = 0;

  outComeYearly () {
    this.total = this.amount * this.allyRate / 100;
    return this.total;
  }

  outComeMonthly () {
    this.total = this.amount * this.allyRate / 100 / this.allyMonths;
    return this.total;
  }

  outComeDaily  () {
    this.total = this.amount * this.allyRate / 100 / this.allyMonths / this.allyDays;
    return this.total;
  }

  outComeSemi () {
    this.total = this.amount * this.allyRate / 100 / 2;
    return this.total;
  }

  outComeQuarterly () {
    this.total = this.amount * this.allyRate / 100 / 2 / 2;
    return this.total;
  }

}
