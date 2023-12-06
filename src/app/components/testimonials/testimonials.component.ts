import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DummyComponent } from '../dummy/dummy.component';

@Component({
  standalone: true,
  imports: [CommonModule, DummyComponent],
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
