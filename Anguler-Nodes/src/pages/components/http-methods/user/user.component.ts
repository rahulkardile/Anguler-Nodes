import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from '../../../../core/services/user-services.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user: any;
  allUser: any;

  constructor(public router: Router, private userService: UserServicesService) {
    this.userService.getUser("5").subscribe({
      next: (user => {
        this.user = user;
        console.log("user", user)
      }),
      error: (e) => console.log(e)
    })

    // all users 
    this.userService.getAllUser().subscribe({
      next: (user=> {
        console.log(user);
        
        this.allUser = user;
      })
    })

  }

}
