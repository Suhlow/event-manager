import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {}

  createEvent(
  eventName: string,
  eventDate: string,
  eventDescription: string
): void {
  if (
    eventName === undefined ||
    eventDate === undefined ||
    eventDescription === undefined 
  ) {
    return;
  }
  this.eventService
    .createEvent(eventName, eventDate, eventDescription)
    .then(() => {
      this.router.navigateByUrl('/home');
    });
}
}