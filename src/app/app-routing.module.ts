import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewConnectionServicesComponent } from './pages/new-connection-services/new-connection-services.component';
import { ViewReceiptComponent } from './pages/view-receipt/view-receipt.component';
import { ViewServiceStatusComponent } from './pages/view-service-status/view-service-status.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboards/dashboard/dashboard.component';
import { AdminDashboardComponent } from './pages/dashboards/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './pages/login/admin-login/admin-login.component';
import { RegisterForBillAlertsComponent } from './pages/register-for-bill-alerts/register-for-bill-alerts.component';
import { OtherMiscellaneousPaymentComponent } from './pages/other-miscellaneous-payment/other-miscellaneous-payment.component';
import { UserregComponent } from './pages/dashboards/admin-dashboard/user-master/userreg/userreg.component';
import { RolemasterComponent } from './pages/dashboards/admin-dashboard/user-master/rolemaster/rolemaster.component';
import { ManageuserComponent } from './pages/dashboards/admin-dashboard/user-master/manageuser/manageuser.component';
import { AtreportComponent } from './pages/dashboards/admin-dashboard/report/atreport/atreport.component';
import { DtreportComponent } from './pages/dashboards/admin-dashboard/report/dtreport/dtreport.component';
import { ItreportComponent } from './pages/dashboards/admin-dashboard/report/itreport/itreport.component';
import { PaymentreportComponent } from './pages/dashboards/admin-dashboard/report/paymentreport/paymentreport.component';
import { CscreportComponent } from './pages/dashboards/admin-dashboard/report/cscreport/cscreport.component';

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
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'userreg',
    component: UserregComponent,
  },
  {
    path: 'rolemaster',
    component: RolemasterComponent,
  },
  {
    path: 'manageuser',
    component: ManageuserComponent,
  },
  {
    path: 'atreport',
    component: AtreportComponent,
  },
  {
    path: 'dtreport',
    component: DtreportComponent,
  },
  {
    path: 'itreport',
    component: ItreportComponent,
  },
  {
    path: 'cscreport',
    component: CscreportComponent,
  },
  {
    path: 'paymentreport',
    component: PaymentreportComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
