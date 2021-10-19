import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectDashboardComponent } from "./pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";

const routes: Routes = [
    { path: 'projects/detail/:id', component: ProjectDetailComponent},
    { path: 'projects', component: ProjectDashboardComponent},
    // { path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProjectRoutingModule { }