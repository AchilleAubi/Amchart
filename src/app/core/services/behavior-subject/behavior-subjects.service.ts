import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorSubjectsService {
  constructor() {}
  refreshLoader = new BehaviorSubject<boolean>(false);
  closeModalEvent = new BehaviorSubject<string>('');

  // Refresh loader
  setRefreshLoader(value: boolean) {
    this.refreshLoader.next(value);
  }
  getRefreshLoader(): Observable<boolean> {
    return this.refreshLoader.asObservable();
  }
  // Close modal
  setCloseModalEvent(value: string) {
    this.closeModalEvent.next(value);
  }
  getCloseModalEvent(): Observable<string> {
    return this.closeModalEvent.asObservable();
  }
}
