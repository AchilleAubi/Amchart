import { Component, OnInit } from '@angular/core';
import { Tabview } from '@core/models/tabview';
import { TabsService } from '@core/services/tabs/tabs.service';

@Component({
  selector: 'cca-tabulation',
  templateUrl: './tabulation.component.html',
  styleUrls: ['./tabulation.component.scss'],
})
export class TabulationComponent implements OnInit {
  dataItems: Tabview[] = [];
  dataItemsClosable: Tabview[] = [];

  constructor(private service: TabsService) {}

  ngOnInit() {
    this.dataItems = this.service.getData();
    this.dataItemsClosable = this.service.getDataClosable();
  }

  scrollableTabs: Tabview[] = Array.from({ length: 50 }, (_, i) => ({
    header: `Tab ${i + 1}`,
    content: `Content ${i + 1}`,
    disabled: false,
    closable: false,
  }));
}
