import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'; // Import the missing MatDividerModule
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatDividerModule], // Remove the (not statically analyzable) import
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
