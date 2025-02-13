import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {GradesService} from '../../../common/services/grades.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HeaderComponent} from '../../../common/components/header/header.component';

@Component({
  selector: 'app-grades-add-page',
  imports: [
    ReactiveFormsModule,
    HeaderComponent
  ],
  templateUrl: './grades-add-page.component.html',
  standalone: true,
  styleUrl: './grades-add-page.component.scss'
})
export class GradesAddPageComponent {
  gradeForm!: FormGroup;
  studentId!: number;
  gradeId?: number;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private gradesService: GradesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const student = params.get('studentId');
      const grade = params.get('gradeId');

      if (student) {
        this.studentId = Number(student);
      }
      if (grade) {
        this.gradeId = Number(grade);
        this.isEditMode = true;
        this.loadGrade();
      }
    });

    this.gradeForm = this.fb.group({
      subject: ['', Validators.required],
      score: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  loadGrade() {
    if (!this.gradeId) return;
    this.gradesService.getGrade(this.gradeId).subscribe((grade) => {
      this.gradeForm.patchValue({
        subject: grade.subject,
        score: grade.score
      });
    });
  }

  onSubmit() {
    if (this.gradeForm.invalid) return;

    if (this.isEditMode) {
      this.gradesService.updateGrade(this.gradeId!, this.gradeForm.value).subscribe(() => {
        this.router.navigate([`/students/grades/${this.studentId}`]);
      });
    } else {
      this.gradesService.createGrade({ studentId: this.studentId, ...this.gradeForm.value }).subscribe(() => {
        this.router.navigate([`/students/grades/${this.studentId}`]);
      });
    }
  }
}

