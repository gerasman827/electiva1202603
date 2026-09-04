import { Injectable, inject, signal, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { PersonaI } from 'src/app/models/interfaz';


@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  private firestore = inject(Firestore);
  private injector = inject(EnvironmentInjector);
  private usuariosRef = collection(this.firestore, 'usuarios');

  public misUsuarios = signal<PersonaI[]>([]);
  constructor() {
    // collectionData emite fuera del contexto de inyección; se restaura con runInInject
    runInInjectionContext(this.injector, () => {
      collectionData(this.usuariosRef, { idField: 'id' }).subscribe(
        (usuarios) => this.misUsuarios.set(usuarios as PersonaI[]),
      );
    });
  }
  agregarUsuario(usuario: Omit<PersonaI, 'id'>) {
    return addDoc(this.usuariosRef, usuario);
  }
  editarUsuario(id: string, usuario: Partial<Omit<PersonaI, 'id'>>) {
    const usuarioDoc = doc(this.firestore, `usuarios/${id}`);
    console.log(usuarioDoc);

    return updateDoc(usuarioDoc, usuario);
  }
  eliminarUsuario(id: string) {
    const usuarioDoc = doc(this.firestore, `usuarios/${id}`);
    return deleteDoc(usuarioDoc);
  }

}
