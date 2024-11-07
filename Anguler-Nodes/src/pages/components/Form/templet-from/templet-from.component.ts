import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templet-from',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './templet-from.component.html',
  styleUrl: './templet-from.component.css'
})
export class TempletFromComponent {
  submitForm(form: any) {
    if (form.valid) {
      console.log('Form submitted successfully', form.value);
      alert(JSON.stringify(form.value));
    } else {
      alert('form is invalid');
    }
  }

  

}
