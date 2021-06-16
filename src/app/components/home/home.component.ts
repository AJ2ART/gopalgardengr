import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalValue = 300000;
  valueReceived = 135000;
  progress = '0%';

  constructor() { }

  ngOnInit() {
    this.progress = `${(this.valueReceived * 100) / this.totalValue}%`;
  }

}
