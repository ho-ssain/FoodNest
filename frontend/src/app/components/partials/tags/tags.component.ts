import { Component, HostListener, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';

import { Tag } from '../../../shared/models/Tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags!: Tag[];
  useCarousel = false;

  // Define slickCarouselConfig
  slickCarouselConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 568,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.tags = this.foodService.getAllTags();
    this.checkScreenWidth(); // Check screen width initially
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth(); // Check screen width on resize
  }

  private checkScreenWidth() {
    // Update the flag based on the screen width
    this.useCarousel = window.innerWidth < 1100;
  }
}
