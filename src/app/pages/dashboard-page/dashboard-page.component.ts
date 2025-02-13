import {Component} from '@angular/core';
import {HeaderComponent} from '../../common/components/header/header.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    HeaderComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  standalone: true,
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
