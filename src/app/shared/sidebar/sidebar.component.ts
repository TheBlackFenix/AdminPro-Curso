import { SidebarService } from './services/sidebar.service';
import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Sidebar } from './models/sidebar.interface';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, SidebarMenuComponent, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);
  profileMenu: Sidebar = {
    title: 'Perfil',
    icon: 'person',
    subItems: [
      {
        title: 'Ver Perfil',
        icon: 'view',
        route: '/perfil/resumen',
      },
      {
        title: 'Editar Perfil',
        icon: 'edit',
        route: '/perfil/editar',
      },
      {
        title: 'Cambiar Contraseña',
        icon: 'lock',
        route: '/perfil/cambiar-contraseña',
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
        icon: 'graphic_eq',
        route: '/dashboard/grafica1',
      },
    ],
  };
}
