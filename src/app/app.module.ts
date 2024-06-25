import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageTrackerComponent } from './image-tracker/image-tracker.component';
import { environment } from './../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent,
    ImageTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp( () => initializeApp( environment.firebase ) ),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
