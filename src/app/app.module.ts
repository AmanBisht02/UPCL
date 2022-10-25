// @angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material imports
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Routing import
import { AppRoutingModule } from './app-routing.module';

// Special impots
import { RecaptchaModule } from 'ng-recaptcha';

// Components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewServiceStatusComponent } from './pages/view-service-status/view-service-status.component';
import { NewConnectionServicesComponent } from './pages/new-connection-services/new-connection-services.component';
import { ViewReceiptComponent } from './pages/view-receipt/view-receipt.component';
import { OtherMiscellaneousPaymentComponent } from './pages/other-miscellaneous-payment/other-miscellaneous-payment.component';
import { RegisterForBillAlertsComponent } from './pages/register-for-bill-alerts/register-for-bill-alerts.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboards/dashboard/dashboard.component';
import { AdminDashboardComponent } from './pages/dashboards/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './pages/login/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ViewServiceStatusComponent,
    NewConnectionServicesComponent,
    ViewReceiptComponent,
    OtherMiscellaneousPaymentComponent,
    RegisterForBillAlertsComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
