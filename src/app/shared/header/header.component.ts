import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'; // Import the missing MatDividerModule
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarService } from '../sidebar/services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatDividerModule], // Remove the (not statically analyzable) import
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sidebarService = inject(SidebarService);
}
