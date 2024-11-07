import { Routes } from '@angular/router';
import { DefaultPipesComponent } from '../pages/components/Pipes/default-pipes/default-pipes.component';
import { StringInterpolationComponent } from '../pages/components/data-binding/string-interpolation/string-interpolation.component';
import { DataTypesComponent } from '../pages/components/data-types/data-types.component';
import { StyleBindingComponent } from '../pages/components/style-binding/style-binding.component';
import { NgClassDirectivesComponent } from '../pages/components/Directives/Attribute/ng-class-directives/ng-class-directives.component';
import { NgStyleComponent } from '../pages/components/Directives/Attribute/ng-style/ng-style.component';
import { ForDirectiveComponent } from '../pages/components/Directives/Structural-Directives/for-directive/for-directive.component';
import { IfDiirctiveComponent } from '../pages/components/Directives/Structural-Directives/if-diirctive/if-diirctive.component';
import { NgSwitchComponent } from '../pages/components/Directives/Structural-Directives/ng-switch/ng-switch.component';
import { ForComponent } from '../pages/components/Controll-Flow/for/for.component';
import { IfElseComponent } from '../pages/components/Controll-Flow/if-else/if-else.component';
import { SwitchComponent } from '../pages/components/Controll-Flow/switch/switch.component';
import { ModelExampleComponent } from '../pages/components/model-example/model-example.component';
import { ServerSideRoutingComponent } from '../pages/components/routes/server-side-routing/server-side-routing.component';
import { AddEmployeeComponent } from '../pages/components/routes/add-employee/add-employee.component';
import { Route404Component } from '../pages/components/route404/route404.component';
import { RangeComponent } from '../pages/assignments/range/range.component';
import { ThemeComponent } from '../pages/assignments/theme/theme.component';
import { UpdateEmployeeComponent } from '../pages/components/update-employee/update-employee.component';
import { UserComponent } from '../pages/components/http-methods/user/user.component';
import { EventsComponent } from '../pages/components/life-cycle-events/events/events.component';
import { ProductListComponent } from '../pages/components/parent-to-child-data-flow/product-list/product-list.component';
import { OurTeamComponent } from '../pages/components/parent-to-child-data-flow/our-team/our-team.component';
import { TempletFromComponent } from '../pages/components/Form/templet-from/templet-from.component';
import { ReactiveFormComponent } from '../pages/components/Form/reactive-form/reactive-form.component';

export const routes: Routes = [

    
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "data-type",
        component: DataTypesComponent
    },
    {
        path: "data-binding",
        children: [
            {
                path: "",
                component: DataTypesComponent,
            },
            {
                path: "string-Interpolation",
                component: StringInterpolationComponent
            },
            {
                path: "property-binding",
                component: StringInterpolationComponent
            },
            {
                path: "two-way",
                component: StringInterpolationComponent
            },
            {
                path: "style",
                component: StyleBindingComponent
            },
        ]
    },
    {
        path: "directive",
        children: [
            {
                path: "attribute",
                children: [
                    {
                        path: "class",
                        component: NgClassDirectivesComponent
                    },
                    {
                        path: "style",
                        component: NgStyleComponent
                    }
                ]
            },
            {
                path: "structural-directive",
                children: [
                    {
                        path: "for",
                        component: ForDirectiveComponent
                    },
                    {
                        path: "if",
                        component: IfDiirctiveComponent
                    },
                    {
                        path: "switch",
                        component: NgSwitchComponent
                    },
                ]
            }
        ]
    },
    {
        path: "controll flow",
        children: [
            {
                path: "for",
                component: ForComponent
            },
            {
                path: "if",
                component: IfElseComponent
            },
            {
                path: "switch",
                component: SwitchComponent
            },
        ]
    },
    {
        path: "model",
        component: ModelExampleComponent
    },
    {
        path: "pipes",
        children: [
            {
                path: "custom",
                component: DefaultPipesComponent
            },
            {
                path: "default",
                component: DefaultPipesComponent
            },
        ]
    },
    {
        path: "employee",
        children: [
            {
                path: "",
                component: ServerSideRoutingComponent

            },
            {
                path: "add",
                component: AddEmployeeComponent
            }
        ]
    },
    {
        path: "practies",
        children: [
            {
                path: "range",
                component: RangeComponent

            },
            {
                path: "theme",
                component: ThemeComponent
            }
        ]
    },
    {
        path: "user",
        component: UserComponent
    },
    {
        path: "events",
        component: EventsComponent
    },
    {
        path: "Product",
        component: ProductListComponent
    },
    {
        path: "Employee",
        component: OurTeamComponent
    },
    {
        path: "form",
        children: [
            {
                path: "templetfrom",
                component: TempletFromComponent

            },
            {
                path: "rective",
                component: ReactiveFormComponent
            }
        ]
    },
    {
        path: "**",
        component: Route404Component
    }

];
