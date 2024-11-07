import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  darkMode = false;
  handleDarkMode(){
    this.darkMode = !this.darkMode
    console.log(this.darkMode);
    
  }
}
