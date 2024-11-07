import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [NgClass],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  items = [
   { name: "someone 1"},
   { name: "someone 2"},
   { name: "someone 3"},
   { name: "someone 4"},
   { name: "someone 5"},
  ]
}
