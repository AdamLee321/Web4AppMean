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
import { CartComponent }        from './components/cart/cart.component';
import { ManageComponent }      from './components/manage/manage.component';
import { InventoryComponent }   from './components/inventory/inventory.component';
import { ProductService }   from './services/product.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FinalcheckoutComponent } from './components/finalcheckout/finalcheckout.component';
import { FooterComponent } from './components/footer/footer.component';


//NOTE:services dont get added to the app.module file automatically add below and also add to providers.
import { ValidateService }  from './services/validate.service';
import { AuthService }      from './services/auth.service';
import { EasterEggComponent } from './components/easter-egg/easter-egg.component';

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
  {path:'inventory', component: InventoryComponent},
  {path:'admin/manage', component: ManageComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'finalcheckout', component: FinalcheckoutComponent},
  //Suprise for a curious developer or explorer -- Happy Easter
  {path:'adamlee/42easteregg', component: EasterEggComponent}

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
    CartComponent,
    ManageComponent,
    InventoryComponent,
    CheckoutComponent,
    FinalcheckoutComponent,
    FooterComponent,
    EasterEggComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MessagesModule,
    GrowlModule
  ],
  providers: [ValidateService, AuthService, ProductService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
