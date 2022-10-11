import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewConnectionServicesComponent } from './pages/new-connection-services/new-connection-services.component';
import { ViewReceiptComponent } from './pages/view-receipt/view-receipt.component';
import { ViewServiceStatusComponent } from './pages/view-service-status/view-service-status.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterForBillAlertsComponent } from './pages/register-for-bill-alerts/register-for-bill-alerts.component';
import { OtherMiscellaneousPaymentComponent } from './pages/other-miscellaneous-payment/other-miscellaneous-payment.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'new-connection-services',
    component: NewConnectionServicesComponent,
  },
  {
    path: 'view-receipt',
    component: ViewReceiptComponent,
  },
  {
    path: 'view-service-status',
    component: ViewServiceStatusComponent,
  },
  {
    path: 'other-miscellaneous-payment',
    component: OtherMiscellaneousPaymentComponent,
  },
  {
    path: 'register-for-bill-alerts',
    component: RegisterForBillAlertsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
