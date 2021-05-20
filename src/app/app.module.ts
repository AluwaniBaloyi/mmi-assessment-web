import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ViewDetailsComponent} from './components/view-details/view-details.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from "./services/auth.guard";
import {AuthenticationService} from "./services/authentication.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponent} from './shared/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SpinnerComponent} from "./shared/spinner/spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {DashboardService} from "./services/dashboard.service";
import {DetailsService} from "./services/details.service";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewDetailsComponent,
    LoginComponent,
    HeaderComponent,
    SpinnerComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    DashboardService,
    DetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
