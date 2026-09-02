import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { PersonaI } from './../../models/interfaz'

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
  imports: [IonItem, IonLabel, IonList]
})
export class ArrayComponent  implements OnInit {

    elementos: PersonaI[] = [
      {id: 1, nombre: "Pokémon Amarillo", edad: 20},
      {id: 2, nombre: "Mega Man X", edad: 45},
      {id: 3, nombre: "La leyenda de Zelda", edad: 12},
      {id: 4, nombre: "Pac-Man", edad: 15},
      {id: 5, nombre: "Super Mario World", edad: 22},
  ]

  public elementoSeleccionado: PersonaI | any = [];
  

  constructor() { }

  ngOnInit() {}

  public obtenerElemento(item: PersonaI){
    console.log(item);
    this.elementoSeleccionado = item;
  }

}
