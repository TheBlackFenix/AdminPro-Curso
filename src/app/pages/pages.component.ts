import { SidebarService } from '../shared/sidebar/services/sidebar.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  templateUrl: './pages.component.html',
  styles: `.full-screen{
    height: calc(100vh - 4rem);
  }`,
})
export default class PagesComponent {
  sidebarService = inject(SidebarService);
}
