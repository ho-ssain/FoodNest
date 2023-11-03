import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((p) => {
      if (p.searchTerm) this.searchTerm = p.searchTerm;
    });
  }

  search(term: string): void {
    if (term) this.router.navigateByUrl('/search/' + term);
  }
}
