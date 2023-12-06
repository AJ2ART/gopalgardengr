import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DummyComponent } from '../dummy/dummy.component';

@Component({
  standalone: true,
  imports: [CommonModule, DummyComponent],
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
