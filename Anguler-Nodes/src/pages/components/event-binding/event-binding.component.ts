import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  count = 0;
  
  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  city: string = 'Pune';
  display(event:any){
    this.city = event.target.value
  }

  phone1="6566687"
  displayPhone(event:any){
    this.phone1 = event.value
    let a:any = document.getElementById('new');
    console.log("Normal", a.value)    
    console.log("template variable", event.value) 
  }
}
