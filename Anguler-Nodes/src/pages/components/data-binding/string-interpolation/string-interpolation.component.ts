import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css'
})
export class StringInterpolationComponent {
  src = "Spark"
  age = 21;
  getDate = () => new Date().toLocaleDateString();

}
