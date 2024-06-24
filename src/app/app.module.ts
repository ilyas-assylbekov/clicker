import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageTrackerComponent } from './image-tracker/image-tracker.component';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDas23TqYo6tt7phhhAdl5VomspQz7Vwok",

  authDomain: "clicker-b32aa.firebaseapp.com",

  projectId: "clicker-b32aa",

  storageBucket: "clicker-b32aa.appspot.com",

  messagingSenderId: "434990014933",

  appId: "1:434990014933:web:32ddf9d9f2200664fd1d5c",

  measurementId: "G-S5ZYPKDS6G"

});

export const db = getFirestore();


@NgModule({
  declarations: [
    AppComponent,
    ImageTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
