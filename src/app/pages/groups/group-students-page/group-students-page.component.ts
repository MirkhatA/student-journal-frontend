import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentsService} from '../../../common/services/students.service';
import {HeaderComponent} from '../../../common/components/header/header.component';
import {NgForOf} from '@angular/common';
import {
  CourseHeaderComponentComponent
} from '../../../common/components/course-header-component/course-header-component.component';

@Component({
  selector: 'app-group-students-page',
  templateUrl: './group-students-page.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    NgForOf,
    CourseHeaderComponentComponent
  ],
  styleUrl: './group-students-page.component.scss'
})
export class GroupStudentsPageComponent implements OnInit {
  students: any[] = [];
  groupName: string = '';

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
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

  deleteStudent(student: any) {
    if (confirm(`Are you sure you want delete ${student.firstName} ${student.lastName}?`)) {
      this.studentsService.deleteStudent(student.id).subscribe(() => {
        this.students = this.students.filter(s => s.id !== student.id);
      })
    }
  }

  editStudent(student: any) {
    this.router.navigate([`/students/edit/${student.id}`]);
  }
}
