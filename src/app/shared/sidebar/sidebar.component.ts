import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Sidebar } from './models/sidebar.interface';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, SidebarMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  profileMenu: Sidebar = {
    title: 'Profile',
    icon: 'person',
    subItems: [
      {
        title: 'Edit Profile',
        icon: 'edit',
        route: '/profile/edit',
      },
      {
        title: 'Change Password',
        icon: 'lock',
        route: '/profile/change-password',
        subItems: [
          {
            title: 'Change Password',
            icon: 'lock',
            route: '/profile/change-password',
          },
          {
            title: 'Forgot Password',
            icon: 'lock',
            route: '/profile/forgot-password',
          },
        ],
      },
    ],
  };
  dashboardMenu: Sidebar = {
    title: 'Dashboard',
    icon: 'dashboard',
    subItems: [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard',
      },
      {
        title: 'Grafica 1',
        icon: 'dashboard',
        route: '/grafica1',
      },
    ],
  };
}
