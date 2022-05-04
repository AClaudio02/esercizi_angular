import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderContainerComponent } from "./order/order-container/order-container.component";
import { UserContainerComponent } from "./user/user-container/user-container.component";

const routes: Routes = [
    { path:'user' , component:UserContainerComponent},
    { path:'', redirectTo:'user', pathMatch:'full'},
    { path:'order', component:OrderContainerComponent},
    { path:'**',component:NotFoundComponent },
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{ }