import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DummyComponent } from '../../dummy/dummy.component';

@Component({
  standalone: true,
  imports: [CommonModule, DummyComponent],
  selector: 'app-gopal-garden',
  templateUrl: './gopal-garden.component.html',
  styleUrls: ['./gopal-garden.component.scss']
})
export class GopalGardenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
