import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {StudentsService} from '../../../common/services/students.service';
import {GroupsService} from '../../../common/services/groups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HeaderComponent} from '../../../common/components/header/header.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-student-add-page',
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './student-add-page.component.html',
  standalone: true,
  styleUrl: './student-add-page.component.scss'
})
export class StudentAddPageComponent implements OnInit {
  studentForm!: FormGroup;
  groups: any[] = [];
  studentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentsService,
    private groupsService: GroupsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      groupId: ['', Validators.required]
    });

    this.loadGroups();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentId = Number(id);
      this.loadStudentData(this.studentId);
    }
  }

  loadGroups() {
    this.groupsService.getAllGroups().subscribe((data) => {
      this.groups = data;
    });
  }

  loadStudentData(id: number) {
    this.studentService.getStudentById(id).subscribe((student) => {
      this.studentForm.patchValue(student);
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;
      studentData.groupId = Number(studentData.groupId);

      if (this.studentId) {
        this.studentService.updateStudent(this.studentId, studentData).subscribe(() => {
          this.router.navigate(['/students']);
        });
      } else {
        this.studentService.addStudent(studentData).subscribe(() => {
          this.router.navigate(['/students']);
        });
      }
    }
  }
}
