import { Component } from '@angular/core';

@Component({
  selector: 'app-image-tracker',
  templateUrl: './image-tracker.component.html',
  styleUrl: './image-tracker.component.scss'
})
export class ImageTrackerComponent {
  items = [
    { imageUrl: 'assets/pirates.webp', count: 0 },
    { imageUrl: 'assets/isekai.webp', count: 0 },
    { imageUrl: 'assets/marines.webp', count: 0 }
  ];

  incrementCount(imageIndex: number) {
    this.items[imageIndex].count++;
  }
}
