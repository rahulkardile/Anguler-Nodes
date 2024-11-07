import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerData = [
    {
      title: "Data-Types",
      path: "/data-type"
    },
    {
      title: "Data Binding",
      path: "/data-binding",
      children: [
        {
          title: "string",
          path: "/string-Interpolation"
        },
        {
          title: "Property Binding",
          path: "/property-binding"
        },
        {
          title: "Two Way",
          path: "/two-way"
        },
        {
          title: "Style",
          path: "/style"
        },
        
      ]
    },
    
    {
      title: "Directive",
      path: "/"
    },
    
    {
      title: "model",
      path: "/model"
    },
    
    {
      title: "Pipes",
      path: "/pipes"
    },
    
  ]
}
