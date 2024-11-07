import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  headerData = [
    {
      title: 'Data Types',
      path: '/data-types',
    },
    {
      title: 'Data Binding',
      path: '/data-binding',
      children: [
        {
          title: 'String Interpolation',
          path: '/data-binding/string-interpolation',
          children: [],
        },
        {
          title: 'Property Binding',
          path: '/data-binding/property-binding',
        },
        {
          title: 'Event Binding',
          path: '/data-binding/event-binding',
        },
        {
          title: 'Two-Way Binding',
          path: '/data-binding/two-way-binding',
        },
        {
          title: 'Style Binding',
          path: '/data-binding/style-binding',
        },
        {
          title: 'Class Binding',
          path: '/data-binding/class-binding',
        },
      ],
    },
    {
      title: 'Directives',
      path: '',
      children: [
        {
          title: 'Attribute Directive',
          path: '',
          children: [
            {
              title: 'NgClass Directive',
              path: '/directive/attribute-directive/ng-class-directive',
            },
            {
              title: 'NgStyle Directive',
              path: '/directive/attribute-directive/ng-style-directive',
            },
          ],
        },
        {
          title: 'Structural Directive',
          path: '',
          children: [
            {
              title: 'NgIf Directive',
              path: '/directive/structural-directive/ng-if-directive',
            },
            {
              title: 'NgFor Directive',
              path: '/directive/structural-directive/ng-for-directive',
            },
            {
              title: 'NgSwitch Directive',
              path: '/directive/structural-directive/ng-switch-directive',
            },
          ],
        },
        {
          title: 'Control Flow',
          path: '',
          children: [
            {
              title: 'If-Else Control Flow',
              path: '/directive/control-flow/if-else-control-flow',
            },
            {
              title: 'For Control Flow',
              path: '/directive/control-flow/for-control-flow',
            },
            {
              title: 'Switch Control Flow',
              path: '/directive/control-flow/switch-control-flow',
            },
          ],
        },
      ],
    },
    {
      title: 'Model',
      path: '/model',
    },
    {
      title: 'Pipes',
      path: '',
      children: [
        {
          title: 'Default Pipes',
          path: '/pipes/default-pipes',
        },
        {
          title: 'Custom Pipes',
          path: '/pipes/custom-pipes',
        },
      ],
    },
    {
      title: 'Practies',
      path: '',
      children: [
        {
          title: 'Range',
          path: '/practies/range',
        },
        {
          title: "Theme",
          path: "/practies/theme"
        }
      ],
    },
    {
      title: 'Form',
      path: '',
      children: [
        {
          title: 'Templet Form',
          path: '/form/templetfrom',
        },
        {
          title: "Rective",
          path: "/form/rective"
        }
      ],
    },
    {
      title: "User Fetch",
      path: "user",
    },
    {
      title: "Events",
      path: "events",
    },
    {
      title: "Products",
      path: "Product",
    },
    {
      title: "Employee",
      path: "Employee",
    },
  ];

  toggleUl(classname: string) {
    let target = document.querySelector('.' + classname);
    target?.classList.toggle('list');
  }
}
