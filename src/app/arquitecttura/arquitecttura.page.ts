import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-arquitecttura',
  templateUrl: './arquitecttura.page.html',
  styleUrls: ['./arquitecttura.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ArquitectturaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
