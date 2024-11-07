import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {
  color = "blue";
}
