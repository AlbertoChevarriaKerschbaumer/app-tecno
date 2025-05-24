import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-programas',
  templateUrl: 'programas.page.html',
  styleUrls: ['programas.page.scss'],
  imports: [IonButton, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class ProgramasPage {
  constructor() {}
}
