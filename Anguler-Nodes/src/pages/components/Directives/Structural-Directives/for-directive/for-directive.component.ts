import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './for-directive.component.html',
  styleUrl: './for-directive.component.css'
})
export class ForDirectiveComponent {
  stylesOBJ = {
    'color': "red",
    'padding': "20px",
    'background-color': "green"
  }

  Persons = [
    {
      name: 'John Doe',
      age: 31,
      city: 'Delhi'
    },
    {
      name: 'Bhakti Purnale',
      age: 21,
      city: "Mumbai"
    },
    {
      name: "Rahul Sonawne",
      age: 12,
      city: "Pune"
    }
  ];

  getColor = (city: string) => {
    switch (city) {
      case 'Pune':
        return 'green';

      case 'Mumbai':
        return "Yellow"

      case 'Delhi':
        return "orange"

      default:
        return 'gray'
    }
  }

  
}
