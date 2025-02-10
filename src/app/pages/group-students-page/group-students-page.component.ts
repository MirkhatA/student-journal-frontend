import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentsService} from '../../data/services/students.service';
import {HeaderComponent} from '../../common-ui/header/header.component';
import {CourseTableComponentComponent} from '../../common-ui/course-table-component/course-table-component.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-group-students-page',
  templateUrl: './group-students-page.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    CourseTableComponentComponent,
    NgForOf
  ],
  styleUrl: './group-students-page.component.scss'
})
export class GroupStudentsPageComponent {
  students: any[] = [];
  groupName: string = '';

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) {}

  ngOnInit() {
    const groupId = this.route.snapshot.paramMap.get('groupId');
    if (groupId) {
      this.loadStudents(parseInt(groupId));
    }
  }

  loadStudents(groupId: number) {
    this.studentsService.getStudentsByGroup(groupId).subscribe((data) => {
      this.students = data;
    });
  }
}
