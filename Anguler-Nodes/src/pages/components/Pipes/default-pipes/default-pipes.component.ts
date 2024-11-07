import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CubePipe } from '../../../../shared/pipes/cube.pipe';
import { PowerPipe } from '../../../../shared/pipes/power.pipe';

@Component({
  selector: 'app-default-pipes',
  standalone: true,
  imports: [CommonModule, CubePipe, PowerPipe],
  templateUrl: './default-pipes.component.html',
  styleUrl: './default-pipes.component.css'
})
export class DefaultPipesComponent {
  institute = "spark";
  course = "ANGULER";
  str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore repellat necessitatibus, illum, expedita voluptates eum quibusdam porro libero voluptatibus cum rem dignissimos. Cum dolorum aperiam te";
  date = new Date();
  price = 1000;
  mark= 0.89;
  person = {
    name : "John Doe",
    age : 21,
    address: {
      street: "123, main st",
      city: 'New York',
      state: 'NY',
      zip: '02819'
    }
  };

  PersonArr = [
    {
      name : "John Doe",
      age : 21,
      address: {
        street: "123, main st",
        city: 'New York',
        state: 'NY',
        zip: '02819'
      }
    },
    {
      name : "John Doe",
      age : 21,
      address: {
        street: "123, main st",
        city: 'New York',
        state: 'NY',
        zip: '02819'
      }
    },
    {
      name : "John Doe",
      age : 21,
      address: {
        street: "123, main st",
        city: 'New York',
        state: 'NY',
        zip: '02819'
      }
    }
  ]
  floatValue = 5.21121;
}
