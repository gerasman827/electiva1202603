import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonAccordion, IonAccordionGroup, IonItem, IonLabel,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonInput,
  IonList,
} from '@ionic/angular/standalone';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { ListComponent } from '../components/list/list.component';
import { accessibilityOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { ArrayComponent } from '../components/array/array.component';
import { Dependencia } from '../services/dependencias/dependencia';
import { DependenciaI } from '../models/interfaz';



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
    IonList
  ],
})
export class HomePage {

  public datosHijo: any = null;

  public nombreDependencia = "";
  public ubicacionDep: string = "";

  public dependenciaService = inject(Dependencia);

  public misDependencias = this.dependenciaService.misDependencias;

  constructor() {
    addIcons({ accessibilityOutline });
  }

  public recibirElementoSeleccionado(item: any) {
    this.datosHijo = item;
  }

  crearDependencia() {

    const nuevaDependencia = {
      nombre: this.nombreDependencia,
      ubicacion: this.ubicacionDep
    }

    this.dependenciaService.agregarDependencia(nuevaDependencia);
  }

  dependenciaSeleccionada(dependencia: DependenciaI) {
    console.log(dependencia);

  }
}
