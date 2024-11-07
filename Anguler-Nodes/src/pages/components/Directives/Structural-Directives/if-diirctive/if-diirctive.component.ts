import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-diirctive',
  standalone: true,
  imports: [NgIf],
  templateUrl: './if-diirctive.component.html',
  styleUrl: './if-diirctive.component.css'
})
export class IfDiirctiveComponent {
  isShow = true
}
