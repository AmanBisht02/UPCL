import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewServiceStatusComponent } from './pages/view-service-status/view-service-status.component';
import { NewConnectionServicesComponent } from './pages/new-connection-services/new-connection-services.component';
import { ViewReceiptComponent } from './pages/view-receipt/view-receipt.component';
import { OtherMiscellaneousPaymentComponent } from './pages/other-miscellaneous-payment/other-miscellaneous-payment.component';
import { RegisterForBillAlertsComponent } from './pages/register-for-bill-alerts/register-for-bill-alerts.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, ViewServiceStatusComponent, NewConnectionServicesComponent, ViewReceiptComponent, OtherMiscellaneousPaymentComponent, RegisterForBillAlertsComponent, LoginComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
