import { Component } from '@angular/core';
import {HeaderComponent} from '../../common-ui/header/header.component';
import {
  CourseHeaderComponentComponent
} from '../../common-ui/course-header-component/course-header-component.component';
import {CourseTableComponentComponent} from '../../common-ui/course-table-component/course-table-component.component';
import {GroupsService} from '../../data/services/groups.service';
import {Router} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-groups-page',
  imports: [
    HeaderComponent,
    CourseHeaderComponentComponent,
    CourseTableComponentComponent,
    NgForOf
  ],
  templateUrl: './groups-page.component.html',
  standalone: true,
  styleUrl: './groups-page.component.scss'
})
export class GroupsPageComponent {
  groups: any[] = [];
  groupActions = [
    { label: '[✏️]', callback: (group: any) => this.editGroup(group) },
    { label: '[🗑️]', callback: (group: any) => this.deleteGroup(group) }
  ];

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
    console.log(`Edit group: ${group.name}`);
  }

  deleteGroup(group: any) {
    console.log(`Delete group: ${group.name}`);
  }

  onAddGroup() {
    console.log("Add new");
  }
}
