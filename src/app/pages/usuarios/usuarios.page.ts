import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AlertController,
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PersonaI } from 'src/app/models/interfaz';

import {
  createOutline,
  add,
  archive,
  eye,
  trashOutline,
  arrowUndoOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonAvatar,
    IonLabel,
    IonButton,
    IonIcon,
    IonButtons,
    IonBackButton,
  ],
})
export class UsuariosPage implements OnInit {
  private alertController = inject(AlertController);

  public usuarioSeleccionado: PersonaI | null = null;

  public misUsuarios = signal<PersonaI[]>([
    { id: 1, nombre: 'Juan Camilo Sepulveda', edad: 21 },
    { id: 1, nombre: 'Carlos Alberto', edad: 11 },
    { id: 1, nombre: 'Lorena Cárdenas', edad: 29 },
  ]);

  constructor() {
    addIcons({
      add,
      arrowUndoOutline,
      createOutline,
      trashOutline,
      archive,
      eye,
    });
  }

  ngOnInit() {}

  public async agregarUsuario() {
    const alert = await this.alertController.create({
      header: 'Nuevo Usuario',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Nombre' },
        { name: 'edad', type: 'number', placeholder: 'Edad' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            const nuevoUsuario: PersonaI = {
              id: Date.now(),
              nombre: data.nombre,
              edad: parseInt(data.edad, 10),
            };
            this.misUsuarios.update((lista) => [nuevoUsuario, ...lista]);
          },
        },
      ],
    });
    await alert.present();
  }

  public archivarUsuario(usuario: PersonaI): void {
    console.log('Archivar usuario:', usuario);
  }

  public eliminarUsuario(usuario: PersonaI): void {
    this.misUsuarios.update((lista) =>
      lista.filter((item) => item.id !== usuario.id),
    );
  }

  async editarUsuario(usuario: PersonaI) {
    const alert = await this.alertController.create({
      header: 'Editar Usuario',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          value: usuario.nombre,
          placeholder: 'Nombre',
        },
        {
          name: 'edad',
          type: 'number',
          value: usuario.edad.toString(),
          placeholder: 'Edad',
        },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Actualizar',
          handler: (data) => {
            if (data.nombre && data.edad) {
              this.misUsuarios.update((lista) =>
                lista.map((item) =>
                  item.id === usuario.id
                    ? { ...item, nombre: data.nombre, edad: Number(data.edad) }
                    : item,
                ),
              );
            }
          },
        },
      ],
    });
    await alert.present();
  }

  public validarUsuario(usuario: PersonaI): void {
    this.usuarioSeleccionado = usuario;
  }
}
