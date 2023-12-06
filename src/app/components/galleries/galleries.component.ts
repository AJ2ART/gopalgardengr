import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DummyComponent } from '../dummy/dummy.component';

@Component({
  standalone: true,
  imports: [CommonModule, DummyComponent],
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
