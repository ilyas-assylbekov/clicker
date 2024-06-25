import { NgModule, Provider } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageTrackerComponent } from './image-tracker/image-tracker.component';
import { environment } from './../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ImageTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({"projectId":"clicker-b32aa","appId":"1:434990014933:web:32ddf9d9f2200664fd1d5c","databaseURL":"https://clicker-b32aa-default-rtdb.firebaseio.com","storageBucket":"clicker-b32aa.appspot.com","apiKey":"AIzaSyDas23TqYo6tt7phhhAdl5VomspQz7Vwok","authDomain":"clicker-b32aa.firebaseapp.com","messagingSenderId":"434990014933","measurementId":"G-S5ZYPKDS6G"})),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
