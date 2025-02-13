import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GradesService} from './common/services/grades.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  grades: any[] = [];
  gradesService = inject(GradesService)

  ngOnInit() {
    this.gradesService.getAllGrades()
      .subscribe(data => {
        this.grades = data;
      });
  }
}
