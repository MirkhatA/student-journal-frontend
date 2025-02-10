import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-table-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-table-component.component.html',
  styleUrl: './course-table-component.component.scss'
})
export class CourseTableComponentComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Input() actions: { label: string; callback: (row: any) => void }[] = [];
}
