import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(){
const config = {
    apiKey: "AIzaSyC1OnKh2eCLnSxhTozmWKRviuGdGw2GB4s",
    authDomain: "activite2angular.firebaseapp.com",
    databaseURL: "https://activite2angular.firebaseio.com",
    projectId: "activite2angular",
    storageBucket: "",
    messagingSenderId: "955711195357"
  };
  firebase.initializeApp(config);
}
  title = 'MyBlog';
 }
