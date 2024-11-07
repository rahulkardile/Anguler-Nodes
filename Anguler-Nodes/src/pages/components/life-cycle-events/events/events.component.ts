import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  constructor() {
    console.log("Event componets is inicilized");

  }

  ngOnInit(): void {
    console.log("onInit");
    this.runOnComponetIsCreated();
  }

  runOnComponetIsCreated() {
    console.log("APi iis called");
  }

}
