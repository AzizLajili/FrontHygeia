import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Medicament } from './medicament';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MedicamentService  {
  constructor(private http:HttpClient ) { }

 

  getMedicamentsList():Observable<any[]>{
    return this.http.get<any[]> ('http://localhost:8090/SpringMVC/medicament/medicaments/sortedByPrice');
  }
  getMedicamentByName(nom: string): Observable<Medicament> {
    return this.http.get<Medicament>(`http://localhost:8090/SpringMVC/medicament/medicaments/getByMedicamentName/${nom}`);
  }

  addMedicament(medicament: Medicament, file: File): Observable<Medicament> {
    const formData = new FormData();
    formData.append('medicament', JSON.stringify(medicament));
    formData.append('imageMedic', file,file.name);

    return this.http.post<Medicament>('http://localhost:8090/SpringMVC/medicament/addMedicament', formData);
  }

  updateMedicament(nom: string, medicament: Medicament): Observable<any> {
    return this.http.put(`http://localhost:8090/SpringMVC/medicaments/updateMedicament/${nom}`, medicament);
  }

  deleteMedicament(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8090/SpringMVC/medicaments/deleteMedicament/${id}`);
  }

  getMedicamentsByType(type: string): Observable<Medicament[]> {
    return this.http.get<Medicament[]>(`http://localhost:8090/SpringMVC/medicaments/getMedicamentsByType/${type}`);
  }

  getAllMedicamentsSortedByName(): Observable<Medicament[]> {
    return this.http.get<Medicament[]>(`http://localhost:8090/SpringMVC/medicaments/medicaments/sortedByName`);
  }

  getMedicamentsSortedByPrice(): Observable<Medicament[]> {
    return this.http.get<Medicament[]>(`http://localhost:8090/SpringMVC/medicaments/medicaments/sortedByPrice`);
  }
}


