import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectsService } from '@core/services/behavior-subject/behavior-subjects.service';

@Component({
  selector: 'cca-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(private behaviorSubject: BehaviorSubjectsService) {}

  ngOnInit() {}
  showLoader() {
    this.behaviorSubject.setRefreshLoader(true);
  }
}
