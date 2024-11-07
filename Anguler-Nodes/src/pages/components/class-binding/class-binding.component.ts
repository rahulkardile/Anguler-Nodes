import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  standalone: true,
  imports: [],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})

export class ClassBindingComponent {
  isEnabled: boolean = false;

  change(){
    this.isEnabled =!this.isEnabled;
  }
}