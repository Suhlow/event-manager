import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  public eventListRef: firebase.firestore.CollectionReference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.eventListRef = firebase
          .firestore()
          .collection(`/userProfile/${user.uid}/eventList`);
      }
    });
  }

createEvent(
  eventName: string,
  eventDate: string,
  eventDescription: string,
 ): Promise<firebase.firestore.DocumentReference> {
  return this.eventListRef.add({
    name: eventName,
    date: eventDate,
    description: eventDescription 
  });
}

getEventList(): firebase.firestore.CollectionReference {
  return this.eventListRef;
}

getEventDetail(eventId: string): firebase.firestore.DocumentReference {
  return this.eventListRef.doc(eventId);
}

}