import { Component } from '@angular/core';

@Component({
  selector: 'cca-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  currentPage1 = 1;
  totalPages1 = 50;

  handlePageChange1(page: number) {
    this.currentPage1 = page;
  }
}
