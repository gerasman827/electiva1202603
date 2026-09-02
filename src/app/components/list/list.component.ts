import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

interface ElementoI {
  id: number;
  nombre: string | null;
  tipo: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule, IonItem, IonLabel, IonList],

})
export class ListComponent  implements OnInit {

  @Output() elementoSeleccionado = new EventEmitter<ElementoI>();

  public elementos = [
    {id: 1, nombre: "Pockemon", tipo: "Eléctrico"},
    {id: 2, nombre: "Charmander", tipo: "Fuego"},
    {id: 3, nombre: "Squirtle", tipo: "Agua"},
  ]

  constructor() { }

  ngOnInit() {}

  public verContenido(contenido: ElementoI): void {
    this.enviarElementoSeleccionado(contenido);
  }

  private enviarElementoSeleccionado(item: ElementoI): void {
    this.elementoSeleccionado.emit(item);
  }
}
