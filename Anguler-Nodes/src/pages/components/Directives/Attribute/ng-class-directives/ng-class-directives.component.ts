import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-directives',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-class-directives.component.html',
  styleUrl: './ng-class-directives.component.css'
})
export class NgClassDirectivesComponent {
  custom = 'custom';
  custom2 = 'custom-2';
  class1 = 'class-1';
  cssOBJ = { 'custom': true, 'custom-2': true, 'class-1': true }
}
