import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared/shared.module";
import { ProjectFormComponent } from "./components/project-form/project-form.component";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectDashboardComponent } from "./pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";

@NgModule({
    declarations: [ProjectDashboardComponent,
        ProjectDetailComponent,
        ProjectListComponent,
        ProjectFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ]
})
export class ProjectModule { }