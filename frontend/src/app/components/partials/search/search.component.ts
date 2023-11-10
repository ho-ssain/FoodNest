import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm = '';
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) this.searchTerm = params.searchterm;
    });
  }

  search(term: string): void {
    if (term) this.router.navigateByUrl('/search/' + term);
  }
}
