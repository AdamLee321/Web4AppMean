import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes}  from '@angular/router';
import { GrowlModule }          from 'primeng/primeng';
import { MessagesModule }       from 'primeng/primeng';
import { MenuItem }             from 'primeng/components/common/api';
import { AuthGuard }            from './guards/auth.guard';

import { AppComponent }       from './app.component';
import { NavbarComponent }    from './components/navbar/navbar.component';
import { LoginComponent }     from './components/login/login.component';
import { RegisterComponent }  from './components/register/register.component';
import { HomeComponent }      from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent }   from './components/profile/profile.component';
import { ContactusComponent } from './components/contactus/contactus.component';

//NOTE:services dont get added to the app.module file automatically add below and also add to providers.
import { ValidateService }  from './services/validate.service';
import { AuthService }      from './services/auth.service';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MessagesModule,
    GrowlModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }