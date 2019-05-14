import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

//login
  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

//signup
signupUser(email: string, password: string): Promise<any> {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((newUserCredential: firebase.auth.UserCredential) => {
      firebase
        .firestore()
        .doc(`/userProfile/${newUserCredential.user.uid}`)
        .set({ email });
    })
}

//reset password
resetPassword(email:string): Promise<void> {
  return firebase.auth().sendPasswordResetEmail(email);
}

//logout
logoutUser():Promise<void> {
  return firebase.auth().signOut();
}

}
