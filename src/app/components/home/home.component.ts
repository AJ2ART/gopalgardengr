import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalValue = 500000;
  valueReceived = 146000;
  numOfDonors = 10;
  progress = '0%';

  constructor() { }

  ngOnInit() {
    this.progress = `${(this.valueReceived * 100) / this.totalValue}%`;
  }

}
