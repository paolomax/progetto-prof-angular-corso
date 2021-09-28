import { NgModule } from "@angular/core"
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from "./dashboard/home/home.component"
import { ProjectContainerComponent } from "./project/project-container/project-container.component"

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'projects', component: ProjectContainerComponent}
]

@NgModule({

}) //moduli relativi ad Angular, che istruiscono A su come si comporta l
export class AppRoutingModule {}