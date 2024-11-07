import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-side-routing',
  standalone: true,
  imports: [],
  templateUrl: './server-side-routing.component.html',
  styleUrl: './server-side-routing.component.css'
})



export class ServerSideRoutingComponent {

  constructor(public router: Router){}


  employees = [
    { id: 1, name: "John Doe", position: "Software Engineer", salary: 60000 },
    { id: 2, name: "Jane Smith", position: "Product Manager", salary: 80000 },
    { id: 3, name: "Sam Johnson", position: "UX Designer", salary: 55000 },
    { id: 4, name: "Alice Brown", position: "Data Scientist", salary: 75000 },
    { id: 5, name: "Michael White", position: "DevOps Engineer", salary: 70000 }
  ];

  addEmployee(){
    this.router.navigate(["/employee", "add"])
  }
}
