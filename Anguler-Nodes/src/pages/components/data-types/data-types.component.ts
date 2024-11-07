import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  standalone: true,
  imports: [],
  templateUrl: './data-types.component.html',
  styleUrl: './data-types.component.css'
})
export class DataTypesComponent {
  age: number = 21;
  count = 5;
  rollNo?: number;

  name = 'John Doe';
  city: string = 'pune';

  isLoggedIn: boolean = false;

  arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  person: object = {
    name: 'Jane Doe',
    age: 30,
    city: 'New York',
  };

  changeAge: Function = () => {
    this.age = 25;
  };

  getAge = (): number => {
    return this.age;
  };

  student: any
}
