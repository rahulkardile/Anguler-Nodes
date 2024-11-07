import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  path = 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik'
  isDisabled = false
  name = "Rahul Kardile"
  email = "rahulkardile@gmail.com"

  student = {
    name : "Rahul Kardile",
    email : "rahulkardile@gmail.com"
  }

}
