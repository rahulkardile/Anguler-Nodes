import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  form: FormGroup;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  passwordMatchValidator(control: AbortController){}

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      age: ["", [Validators.required, Validators.min(18)]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.pattern(this.passwordPattern)]],
      passwordConfirm: ["", [Validators.required, Validators.minLength(6), ]],
    })
  }

  fieldValidator(name: string, error: string){

  }

}
