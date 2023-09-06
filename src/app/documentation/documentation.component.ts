import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectsService } from '@core/services/behavior-subject/behavior-subjects.service';

@Component({
  selector: 'cca-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  loading: boolean = false;
  constructor(private behaviorService: BehaviorSubjectsService) {}

  ngOnInit() {
    this.behaviorService.getRefreshLoader().subscribe({
      next: (res: boolean) => {
        this.loading = res;
        setTimeout(() => (this.loading = false), 4000); // juste pour démonstration, mais pour l'utilisation le behavior sera lancer une autre fois avec la valeur false et ce timeOut sera supprimer
      },
    });
  }
}
