import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CounterComponent } from './employee-dashboard/counter/counter.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';

const route:Routes = [
  {path:"",redirectTo:'user',pathMatch:'full'},
  {path:'user',component:UsersComponent},
  {path:'contact',component:ContactsComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:NotFoundComponent}
]
  


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    CounterComponent,
    AboutComponent,
    UsersComponent,
    ContactsComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
