import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ApiService} from './data/services/api.service';
import {GradesService} from './data/services/grades.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  grades: any[] = [];
  gradesService = inject(GradesService)

  ngOnInit() {
    this.gradesService.getAllGrades()
      .subscribe(data => {
        this.grades = data;
      });
  }
}
