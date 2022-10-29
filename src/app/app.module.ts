// @angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material imports
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

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
import { UserregComponent } from './pages/dashboards/admin-dashboard/user-master/userreg/userreg.component';
import { RolemasterComponent } from './pages/dashboards/admin-dashboard/user-master/rolemaster/rolemaster.component';
import { ManageuserComponent } from './pages/dashboards/admin-dashboard/user-master/manageuser/manageuser.component';
import { AtreportComponent } from './pages/dashboards/admin-dashboard/report/atreport/atreport.component';
import { CscreportComponent } from './pages/dashboards/admin-dashboard/report/cscreport/cscreport.component';
import { ItreportComponent } from './pages/dashboards/admin-dashboard/report/itreport/itreport.component';
import { DtreportComponent } from './pages/dashboards/admin-dashboard/report/dtreport/dtreport.component';
import { PaymentreportComponent } from './pages/dashboards/admin-dashboard/report/paymentreport/paymentreport.component';
import { MaqueeComponent } from './pages/dashboards/admin-dashboard/cms/maquee/maquee.component';
import { SliderComponent } from './pages/dashboards/admin-dashboard/cms/slider/slider.component';

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
    UserregComponent,
    RolemasterComponent,
    ManageuserComponent,
    AtreportComponent,
    CscreportComponent,
    ItreportComponent,
    DtreportComponent,
    PaymentreportComponent,
    MaqueeComponent,
    SliderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
