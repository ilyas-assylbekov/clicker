import { Component, OnInit } from '@angular/core';
import { collection, addDoc, getDocs, getDoc, setDoc } from "firebase/firestore";
import { db, firebaseApp } from '../app.module';

@Component({
  selector: 'app-image-tracker',
  templateUrl: './image-tracker.component.html',
  styleUrl: './image-tracker.component.scss'
})
export class ImageTrackerComponent implements OnInit {
  items = [
    { imageUrl: 'assets/pirates.webp', count: 0 },
    { imageUrl: 'assets/isekai.webp', count: 0 },
    { imageUrl: 'assets/marines.webp', count: 0 }
  ];

  async ngOnInit() {
    const querySnapshot = await getDocs(collection(db, "imageTracker"));
    if (querySnapshot.empty) {
      console.log("Collection does not exist or is empty");
      // Optionally, initialize the collection with documents if it should exist
      this.items.forEach(async (item) => {
        const docRef = await addDoc(collection(db, "imageTracker"), item);
        console.log("Document written with ID: ", docRef.id);
      });
    } else {
      console.log("Collection exists and has documents");
      // Additional logic here if needed
      querySnapshot.forEach((doc) => {
        this.items.forEach((item) => {
          if (doc.data()['imageUrl'] === item.imageUrl) {
            item.count = doc.data()['count'];
          }
        })
      });
    }
  }

  incrementCount(imageIndex: number) {
    this.items[imageIndex].count++;
    this.items.forEach(async (item) => {
      const querySnapshot = await getDocs(collection(db, "imageTracker"));
      querySnapshot.forEach(async (doc) => {
        if (doc.data()['imageUrl'] === item.imageUrl) {
          await setDoc(doc.ref, item);
        }
      })
    })
  }
}
