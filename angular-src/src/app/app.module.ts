import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes}  from '@angular/router';
import { GrowlModule }          from 'primeng/primeng';
import { MessagesModule }       from 'primeng/primeng';
import { MenuItem }             from 'primeng/components/common/api';
import { AuthGuard }            from './guards/auth.guard';

import { AppComponent }         from './app.component';
import { NavbarComponent }      from './components/navbar/navbar.component';
import { LoginComponent }       from './components/login/login.component';
import { RegisterComponent }    from './components/register/register.component';
import { HomeComponent }        from './components/home/home.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProfileComponent }     from './components/profile/profile.component';
import { ContactusComponent }   from './components/contactus/contactus.component';
import { AdminloginComponent }  from './components/adminlogin/adminlogin.component';
import { AboutComponent }       from './components/about/about.component';
import { ProductsComponent }    from './components/products/products.component';
import { CartComponent }        from './components/cart/cart.component';
import { ManageComponent }      from './components/manage/manage.component';

//NOTE:services dont get added to the app.module file automatically add below and also add to providers.
import { ValidateService }  from './services/validate.service';
import { AuthService }      from './services/auth.service';



const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'admin', component: AdminloginComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'about', component: AboutComponent},
  {path:'cart', component: CartComponent},
  {path:'products', component: ProductsComponent},
  {path:'admin/manage', component: ManageComponent},
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
    ContactusComponent,
    AdminloginComponent,
    AboutComponent,
    ProductsComponent,
    CartComponent,
    ManageComponent
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
