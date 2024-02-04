import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: `./progress.component.css`,
})
export class ProgressComponent {
  progress: number = 50;

  get porcentaje(): string {
    return `${this.progress}%`;
  }
  changeValue(value: number) {
    if (this.progress <= 100 && value > 0) {
      this.progress += value;
      this.progress = this.progress > 100 ? 100 : this.progress;
    } else if (this.progress >= 0 && value < 0) {
      this.progress += value;
      this.progress = this.progress < 0 ? 0 : this.progress;
    }
  }
}
