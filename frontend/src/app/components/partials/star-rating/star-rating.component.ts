import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
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
      imageName = 'star-full.svg';
    } else if (this.stars >= previousHalf) {
      imageName = 'star-half.svg';
    } else {
      imageName = 'star-empty.svg';
    }
    return `../../../../assets/stars/${imageName}`;
  }
}
