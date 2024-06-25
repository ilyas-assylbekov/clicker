import { Component, Inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clicker';
  constructor(@Inject(FirebaseApp) private firebaseApp: FirebaseApp) {}

  ngOnInit(): void {
    // Access Firebase app instance here
    console.log('Firebase app:', this.firebaseApp);
  }
}