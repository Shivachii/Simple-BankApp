import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [AppComponent, HeaderComponent, FooterComponent],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

}
