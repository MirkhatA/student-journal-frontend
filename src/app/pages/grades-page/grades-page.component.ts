import {Component} from '@angular/core';
import {HeaderComponent} from '../../common-ui/header/header.component';
import {
  CourseHeaderComponentComponent
} from "../../common-ui/course-header-component/course-header-component.component";
import {CourseTableComponentComponent} from "../../common-ui/course-table-component/course-table-component.component";
import {Router} from '@angular/router';
import {GradesService} from '../../data/services/grades.service';

@Component({
  selector: 'app-grades-page',
  imports: [HeaderComponent, CourseHeaderComponentComponent, CourseTableComponentComponent],
  templateUrl: './grades-page.component.html',
  standalone: true,
  styleUrl: './grades-page.component.scss'
})
export class GradesPageComponent {
  grades: any[] = [];
  gradeActions = [
    { label: '[✏️]', callback: (group: any) => this.editGrade(group) },
    { label: '[🗑️]', callback: (group: any) => this.deleteGrade(group) }
  ];

  constructor(private gradesService: GradesService, private router: Router) {}

  ngOnInit() {
    this.loadGrades();
  }

  loadGrades() {
    this.gradesService.getAllGrades().subscribe((data) => {
      this.grades = data;
    });
  }

  deleteGrade(group: any) {
    console.log(`Delete group: ${group.name}`);
  }

  editGrade(group: any) {
    console.log(`Edit grade: ${group.name}`);
  }

  onAddGrade() {
    console.log("Add new");
  }
}
