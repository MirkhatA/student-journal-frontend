import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../../common/components/header/header.component';
import {
  CourseHeaderComponentComponent
} from "../../../common/components/course-header-component/course-header-component.component";
import {ActivatedRoute, Router} from '@angular/router';
import {GradesService} from '../../../common/services/grades.service';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-grades-page',
  imports: [HeaderComponent, CourseHeaderComponentComponent, DatePipe, NgForOf],
  templateUrl: './grades-page.component.html',
  standalone: true,
  styleUrl: './grades-page.component.scss'
})
export class GradesPageComponent implements OnInit {
  grades: any[] = [];
  studentId!: number;

  constructor(private route: ActivatedRoute, private gradesService: GradesService, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('studentId');
      this.studentId = Number(id);
      this.loadGrades();
    });
  }

  loadGrades() {
    this.gradesService.getGradesByStudent(this.studentId).subscribe((data) => {
      this.grades = data;
    });
  }

  onAddGrade() {
    this.router.navigate([`/students/${this.studentId}/grades/add`]);
  }

  editGrade(grade: any) {
    this.router.navigate([`/students/${this.studentId}/grades/edit/${grade.id}`]);
  }

  deleteGrade(grade: any) {
    if (confirm(`Are you sure you want delete this?`)) {
      this.gradesService.deleteGrade(grade.id).subscribe(() => {
        this.grades = this.grades.filter(s => s.id !== grade.id);
      })
    }
  }
}
