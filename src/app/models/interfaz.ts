export interface PersonaI {
  id: string;
  nombre: string;
  edad: number;
  dependenciaId?: string;
}


export interface DependenciaI {
  id: string;
  nombre: string;
  ubicacion: string;
}