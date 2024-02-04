import { Component, Input } from '@angular/core';
import { Sidebar } from '../../models/sidebar.interface';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {
  @Input({ required: true }) menu!: Sidebar;
  opened = false;
  toggle() {
    this.opened = !this.opened;
  }
}
