import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonAccordion, IonAccordionGroup, IonItem, IonLabel, 
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonInput,
 } from '@ionic/angular/standalone';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { ListComponent } from '../components/list/list.component';
import { accessibilityOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { ArrayComponent } from '../components/array/array.component';



@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader,
    RouterLink, 
    IonToolbar, 
    IonTitle, 
    IonContent,     
    AccordionComponent,
    ListComponent,
    IonButtons,
    IonButton,
    IonIcon,
    ArrayComponent,
    IonItem,
    IonInput,
    FormsModule,
    IonLabel,
  ],
})
export class HomePage {

  public datosHijo: any = null;

  public nombrePersona = "";
  public edadPersona: string = "";

  constructor() {
    addIcons({accessibilityOutline});
  }

  public recibirElementoSeleccionado(item: any) {
    this.datosHijo = item;
  }
}
