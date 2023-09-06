import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@core/models/paginator';
import {
  Customer,
  Product,
  Representative,
  Statuses,
} from '@core/models/tableau';
import { MenuService } from '@core/services/menu/menu.service';
import { TableauService } from '@core/services/tabulation/tableau.service';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'cca-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
})
export class TableauComponent implements OnInit {
  products!: Product[];

  first2: number = 0;

  rows2: number = 10;

  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 }
  ];

  onPageChange2(event: PageEvent) {
    this.first2 = event.first;
    this.rows2 = event.rows;
  }

  selectedProducts!: Product;

  customers!: Customer[];

  representatives!: Representative[];

  statuses!: Statuses[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  items: MenuItem[] = [];

  constructor(
    private customerService: TableauService,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.customerService.getProductsMini().then((data) => {
      this.products = data;
    });
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        (customer) => (customer.date = new Date(<Date>customer.date))
      );
    });

    this.items = this.menuService.getItems();

    this.representatives = this.customerService.getRepresentative();

    this.statuses = this.customerService.getStatus();
  }

  action(value: string) {

  }

  clear(table: Table) {
    table.clear();
  }
}
