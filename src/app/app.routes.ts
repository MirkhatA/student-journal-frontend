import { Routes } from '@angular/router';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {GroupsPageComponent} from './pages/groups-page/groups-page.component';
import {StudentsPageComponent} from './pages/students-page/students-page.component';
import {GradesPageComponent} from './pages/grades-page/grades-page.component';
import {GroupStudentsPageComponent} from './pages/group-students-page/group-students-page.component';
import {StudentAddPageComponent} from './pages/student-add-page/student-add-page.component';

export const routes: Routes = [
  {path: '', component: DashboardPageComponent},
  {path: 'groups', component: GroupsPageComponent},
  {path: 'groups/:groupId/students', component: GroupStudentsPageComponent},
  {path: 'students', component: StudentsPageComponent},
  {path: 'students/add', component: StudentAddPageComponent},
  {path: 'students/edit/:id', component: StudentAddPageComponent},
  {path: 'grades', component: GradesPageComponent}
];
