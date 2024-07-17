import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [AppComponent, HeaderComponent, FooterComponent],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {

}
