import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrl: './star-ratings.component.css',
})
export class StarRatingsComponent {
  @Input() stars!: number;
  @Input() size: number = 1;

  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6,
    };
  }

  getStarImage(current: number): string {
    const previousHalf = current - 0.5;
    let imageName = '';
    if (this.stars >= current) {
      imageName = 'star-full';
    } else if (this.stars >= previousHalf) {
      imageName = 'star-half';
    } else {
      imageName = 'star-empty';
    }
    return `/assets/stars/${imageName}.svg`;
  }
}
