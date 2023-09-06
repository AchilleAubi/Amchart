import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@core/models/paginator';

@Component({
  selector: 'cca-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() model: string = '';
  @Output() pageChange = new EventEmitter<number>();
  pageSize = 10;
  @Input() Data!: PageEvent;

  onPageChange(event: PageEvent) {
    this.Data.first = event.first;
    this.Data.rows = event.rows;
  }

  // Fonction pour changement de page
  changePage(newPage: any) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.pageChange.emit(newPage);
    }
  }

  getCustomPagesArray(): (number | string)[] {
    if (this.totalPages <= 1) {
      return [1];
    }

    const visiblePageCount = Math.min(this.totalPages, 5);
    const ellipsis = '...';
    const pageArray: (number | string)[] = [];

    if (this.totalPages <= visiblePageCount + 2) {
      this.generatePageRange(pageArray, 1, this.totalPages);
    } else if (this.currentPage <= 3) {
      this.generatePageRange(pageArray, 1, visiblePageCount);
      pageArray.push(ellipsis, this.totalPages);
    } else if (this.currentPage >= this.totalPages - 2) {
      pageArray.push(1, ellipsis);
      this.generatePageRange(
        pageArray,
        this.totalPages - visiblePageCount + 1,
        this.totalPages
      );
    } else {
      pageArray.push(1, ellipsis);
      this.generatePageRange(
        pageArray,
        this.currentPage - 1,
        this.currentPage + 1
      );
      pageArray.push(ellipsis, this.totalPages);
    }

    return pageArray;
  }

  generatePageRange(array: (number | string)[], start: number, end: number) {
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
  }
}
