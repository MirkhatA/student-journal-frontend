import { Component } from '@angular/core';
import {HeaderComponent} from '../../common-ui/header/header.component';
import {
  CourseHeaderComponentComponent
} from '../../common-ui/course-header-component/course-header-component.component';
import {CourseTableComponentComponent} from '../../common-ui/course-table-component/course-table-component.component';

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
