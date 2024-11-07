import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTypesComponent } from '../pages/components/data-types/data-types.component';
import { StringInterpolationComponent } from '../pages/components/data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from '../pages/components/property-binding/property-binding.component';
import { EventBindingComponent } from '../pages/components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from '../pages/components/two-way-binding/two-way-binding.component';
import { StyleBindingComponent } from '../pages/components/style-binding/style-binding.component';
import { ClassBindingComponent } from '../pages/components/class-binding/class-binding.component';
import { NgStyleComponent } from '../pages/components/Directives/Attribute/ng-style/ng-style.component';
import { NgClassDirectivesComponent } from '../pages/components/Directives/Attribute/ng-class-directives/ng-class-directives.component';
import { IfDiirctiveComponent } from '../pages/components/Directives/Structural-Directives/if-diirctive/if-diirctive.component';
import { ForDirectiveComponent } from '../pages/components/Directives/Structural-Directives/for-directive/for-directive.component';
import { NgSwitchComponent } from '../pages/components/Directives/Structural-Directives/ng-switch/ng-switch.component';
import { IfElseComponent } from '../pages/components/Controll-Flow/if-else/if-else.component';
import { ForComponent } from '../pages/components/Controll-Flow/for/for.component';
import { SwitchComponent } from '../pages/components/Controll-Flow/switch/switch.component';
import { ModelExampleComponent } from '../pages/components/model-example/model-example.component';
import { OurTeamComponent } from '../pages/components/parent-to-child-data-flow/our-team/our-team.component';
import { ProductListComponent } from '../pages/components/parent-to-child-data-flow/product-list/product-list.component';
import { DefaultPipesComponent } from '../pages/components/Pipes/default-pipes/default-pipes.component';
import { HeaderComponent } from '../shared/reusable/header/header.component';
import { NavbarComponent } from '../pages/components/navbar/navbar.component';
import { ServerSideRoutingComponent } from '../pages/components/routes/server-side-routing/server-side-routing.component';
import { AddEmployeeComponent } from '../pages/components/routes/add-employee/add-employee.component';
import { RangeComponent } from '../pages/assignments/range/range.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, DataTypesComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, StyleBindingComponent, ClassBindingComponent, NgClassDirectivesComponent, NgStyleComponent, IfDiirctiveComponent, ForDirectiveComponent, NgSwitchComponent, IfElseComponent, ForComponent, SwitchComponent, ModelExampleComponent, OurTeamComponent, ProductListComponent, DefaultPipesComponent, HeaderComponent, ServerSideRoutingComponent, AddEmployeeComponent, RangeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
