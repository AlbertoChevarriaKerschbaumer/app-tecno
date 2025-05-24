import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-jerarquicos',
  templateUrl: './jerarquicos.page.html',
  styleUrls: ['./jerarquicos.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JerarquicosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
