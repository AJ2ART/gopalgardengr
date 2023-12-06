import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DummyComponent } from '../dummy/dummy.component';

@Component({
  standalone: true,
  imports: [CommonModule, DummyComponent],
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.scss']
})
export class FestivalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
