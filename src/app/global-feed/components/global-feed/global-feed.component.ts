import { Component } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.scss',
  standalone: false
})
export class GlobalFeedComponent {
  apiUrl = '/articles'
}
