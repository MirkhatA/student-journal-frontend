import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../../common/components/header/header.component';
import {
  CourseHeaderComponentComponent
} from '../../../common/components/course-header-component/course-header-component.component';
import {GroupsService} from '../../../common/services/groups.service';
import {Router} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-groups-page',
  imports: [
    HeaderComponent,
    CourseHeaderComponentComponent,
    NgForOf
  ],
  templateUrl: './groups-page.component.html',
  standalone: true,
  styleUrl: './groups-page.component.scss'
})
export class GroupsPageComponent implements OnInit {
  groups: any[] = [];

  constructor(private groupService: GroupsService, private router: Router) {}

  ngOnInit() {
    this.loadGroups();
  }

  loadGroups() {
    this.groupService.getAllGroups().subscribe((data) => {
        this.groups = data;
      });
  }

  goToGroupStudents(groupId: number) {
    this.router.navigate([`/groups/${groupId}/students`])
  }

  editGroup(group: any) {
    this.router.navigate([`/groups/edit/${group.id}`])
  }

  deleteGroup(group: any) {
    if (confirm(`Are you sure you want delete ${group.name}`)) {
      this.groupService.deleteGroup(group.id).subscribe(() => {
        this.groups = this.groups.filter(g => g.id !== group.id);
      })
    }
  }

  onAddGroup() {
    this.router.navigate(['/groups/add'])
  }
}
