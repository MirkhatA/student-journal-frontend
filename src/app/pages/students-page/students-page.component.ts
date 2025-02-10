import {Component} from '@angular/core';
import {HeaderComponent} from '../../common-ui/header/header.component';
import {
  CourseHeaderComponentComponent
} from "../../common-ui/course-header-component/course-header-component.component";
import {CourseTableComponentComponent} from "../../common-ui/course-table-component/course-table-component.component";
import {Router} from '@angular/router';
import {StudentsService} from '../../data/services/students.service';

@Component({
  selector: 'app-students-page',
    imports: [HeaderComponent, CourseHeaderComponentComponent, CourseTableComponentComponent],
  templateUrl: './students-page.component.html',
  standalone: true,
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {
  students: any[] = [];
  studentActions = [
    { label: '[✏️]', callback: (students: any) => this.editStudent(students) },
    { label: '[🗑️]', callback: (students: any) => this.deleteStudent(students) }
  ];

  constructor(private studentService: StudentsService, private router: Router) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe((data) => {
      this.students = data;
    });
  }

  deleteStudent(student: any) {
    if (confirm(`Are you sure you want delete ${student.firstName} ${student.lastName}?`)) {
      this.studentService.deleteStudent(student.id).subscribe(() => {
        this.students = this.students.filter(s => s.id !== student.id);
      })
    }
  }

  editStudent(student: any) {
    this.router.navigate([`/students/edit/${student.id}`]);
  }

  onAddStudent() {
    this.router.navigate(['/students/add'])
  }
}
