import { EnvironmentInjector, inject, Injectable, runInInjectionContext, signal } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { DependenciaI } from 'src/app/models/interfaz';

@Injectable({
  providedIn: 'root',
})
export class Dependencia {

  private firestore = inject(Firestore);
  private injector = inject(EnvironmentInjector);
  private dependenciasRef = collection(this.firestore, 'dependencias');

  public misDependencias = signal<DependenciaI[]>([]);

  constructor() {
    runInInjectionContext(this.injector, () => {
      collectionData(this.dependenciasRef, { idField: 'id' }).subscribe(
        (dependencias) => this.misDependencias.set(dependencias as DependenciaI[])
      );
    });
  }

  agregarDependencia(dependencia: Partial<Omit<DependenciaI, 'id'>>) {
    console.log(this.misDependencias());
    return addDoc(this.dependenciasRef, dependencia);
  }

}
