import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-course-header-component',
  imports: [
    NgIf
  ],
  templateUrl: './course-header-component.component.html',
  standalone: true,
  styleUrl: './course-header-component.component.scss'
})
export class CourseHeaderComponentComponent {
  @Input() title: string = '';
  @Input() enableSearch: boolean = false;

  @Output() searchEvent = new EventEmitter<string>();
  @Output() addEvent = new EventEmitter<void>();

  searchText: string = '';

  onSearchChange(event: any) {
    this.searchText = event.target.value;
    this.searchEvent.emit(this.searchText);
  }
}
