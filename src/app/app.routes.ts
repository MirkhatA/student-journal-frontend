import { Routes } from '@angular/router';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {GroupsPageComponent} from './pages/groups/groups-page/groups-page.component';
import {StudentsPageComponent} from './pages/students/students-page/students-page.component';
import {GradesPageComponent} from './pages/grades/grades-page/grades-page.component';
import {GroupStudentsPageComponent} from './pages/groups/group-students-page/group-students-page.component';
import {StudentAddPageComponent} from './pages/students/student-add-page/student-add-page.component';
import {GroupAddPageComponent} from './pages/groups/group-add-page/group-add-page.component';
import {GradesAddPageComponent} from './pages/grades/grades-add-page/grades-add-page.component';

export const routes: Routes = [
  {path: '', component: DashboardPageComponent},
  {path: 'groups', component: GroupsPageComponent},
  {path: 'groups/:groupId/students', component: GroupStudentsPageComponent},
  {path: 'groups/add', component: GroupAddPageComponent},
  {path: 'groups/edit/:id', component: GroupAddPageComponent},

  {path: 'students', component: StudentsPageComponent},
  {path: 'students/add', component: StudentAddPageComponent},
  {path: 'students/edit/:id', component: StudentAddPageComponent},
  {path: 'students/grades/:studentId', component: GradesPageComponent},
  {path: 'students/:studentId/grades/add', component: GradesAddPageComponent },
  {path: 'students/:studentId/grades/edit/:gradeId', component: GradesAddPageComponent }
];
