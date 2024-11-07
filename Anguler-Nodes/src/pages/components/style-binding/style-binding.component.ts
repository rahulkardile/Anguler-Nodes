import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {
  textColor: string = 'red';
  fontSize: string =  "21px";
  bgColor: string = "blue";
}
