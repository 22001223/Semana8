import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet/>',
  styles: [
    'body { margin: 0; padding: 0; }'
  ]
})
export class AppComponent {
  title = 'Semana8';
}
