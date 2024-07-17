import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [AppComponent, HeaderComponent, FooterComponent],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent {

}
