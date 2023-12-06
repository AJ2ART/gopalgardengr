import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DummyComponent } from '../../dummy/dummy.component';

@Component({
  standalone: true,
  imports: [CommonModule, DummyComponent],
  selector: 'app-krishna-house',
  templateUrl: './krishna-house.component.html',
  styleUrls: ['./krishna-house.component.scss']
})
export class KrishnaHouseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
