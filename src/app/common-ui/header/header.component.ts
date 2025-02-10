import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    {
      label: 'Dashboard',
      link: ''
    },
    {
      label: 'Student',
      link: '/students'
    },
    {
      label: 'Groups',
      link: '/groups'
    },
    {
      label: 'Grades',
      link: '/grades'
    },
  ]
}
