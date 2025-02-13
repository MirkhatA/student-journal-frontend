import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../../common/components/header/header.component';
import {
  CourseHeaderComponentComponent
} from "../../../common/components/course-header-component/course-header-component.component";
import {Router} from '@angular/router';
import {StudentsService} from '../../../common/services/students.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-students-page',
  imports: [HeaderComponent, CourseHeaderComponentComponent, NgForOf, NgIf],
  templateUrl: './students-page.component.html',
  standalone: true,
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent implements OnInit {
  students: any[] = [];
  searchQuery: string = '';

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

  onSearchStudents(query: string) {
    this.searchQuery = query.trim();
    if (this.searchQuery.length > 0) {
      this.studentService.searchStudents(this.searchQuery).subscribe((data) => {
        this.students = data;
      });
    } else {
      this.loadStudents();
    }
  }

  editStudent(student: any) {
    this.router.navigate([`/students/edit/${student.id}`]);
  }

  onAddStudent() {
    this.router.navigate(['/students/add'])
  }

  getAllGrades(student: any) {
    this.router.navigate([`/students/grades/${student.id}`])
  }
}
