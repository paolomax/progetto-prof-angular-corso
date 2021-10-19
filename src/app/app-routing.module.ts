import { NgModule } from "@angular/core"
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from 'src/app/modules/dashboard/pages/home/home.component'

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: '**', redirectTo: '/home'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
}) //moduli relativi ad Angular, che istruiscono A su come si comporta l
export class AppRoutingModule {}