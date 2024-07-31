import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubSubService {

  private eventSubject = new Subject<any>();

  // Observable stream
  public events$ = this.eventSubject.asObservable();

  // Method to publish events
  publish(event: any): void {
    this.eventSubject.next(event);
  }
}
