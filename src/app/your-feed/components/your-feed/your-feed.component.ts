import { Component } from '@angular/core';

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrl: './your-feed.component.scss'
})
export class YourFeedComponent {
  apiUrl = '/articles/feed'
}
