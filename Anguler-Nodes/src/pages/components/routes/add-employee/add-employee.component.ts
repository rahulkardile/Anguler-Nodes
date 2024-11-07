import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from '../../../../core/services/user-services.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})

export class AddEmployeeComponent {
  constructor(public router: Router, private userService: UserServicesService){
    this.userService.getUser("5").subscribe({next:(user=>console.log("user",user))})
  }

  addEmployee(){
    this.router.navigate(["/employee"])
  }



}
