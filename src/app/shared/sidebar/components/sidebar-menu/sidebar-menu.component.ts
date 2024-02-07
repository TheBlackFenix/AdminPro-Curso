import { SidebarService } from './../../services/sidebar.service';
import { Component, Input, effect, inject } from '@angular/core';
import { Sidebar } from '../../models/sidebar.interface';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {
  @Input({ required: true }) menu!: Sidebar;
  @Input({ required: true }) collapse!: boolean;
  sidebarService = inject(SidebarService);
  opened = false;
  constructor() {
    effect(() => {
      this.opened = this.sidebarService.collapse ? false : this.opened;
    });
  }
  toggle() {
    this.opened = !this.opened;
  }
}
