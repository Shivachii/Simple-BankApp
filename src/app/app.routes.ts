import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [

    {
        path: "",
        component: LandingComponent
    },

    {
        path: "register",
        component: RegistrationComponent
    },
  
    {
        path: "login",
        component: LoginComponent
    },

    {
        path: "dashboard",
        component: DashboardComponent
    },

    {
        path: "deposit",
        component: DepositComponent
    },
    {
        path: "withdraw",
        component: WithdrawComponent
    },
    {
        path: "transaction-history",
        component: TransactionHistoryComponent
    },
];
