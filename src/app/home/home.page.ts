import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonButton, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonApp, IonButton, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class HomePage {
  constructor() {}
}
