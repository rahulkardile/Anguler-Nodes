import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './range.component.html',
  styleUrl: './range.component.css'
})
export class RangeComponent {
  value = 10;
  changeValue(value: HTMLInputElement){
    this.value = parseInt(value.value);
  }
}
