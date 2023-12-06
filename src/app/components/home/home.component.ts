import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
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
