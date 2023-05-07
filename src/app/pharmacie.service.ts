import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Pharmacie } from './pharmacie';
import { Medicament } from './medicament';

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

  private baseUrl = 'http://localhost:8090/SpringMVC';

  constructor(private http: HttpClient) 
  { }

  getAllPharmacies(): Observable<Pharmacie[]> {
    return this.http.get<Pharmacie[]>(`${this.baseUrl}/getAllPharmacies`);
 }

  getPharmacieById(id: number): Observable<Pharmacie> {
    return this.http.get<Pharmacie>(`${this.baseUrl}/getPharmacieById/${id}`);
  }

  addPharmacie(pharmacie: Pharmacie): Observable<Pharmacie> {
    return this.http.post<Pharmacie>(`${this.baseUrl}/addPharmacie`, pharmacie);
  }

  updatePharmacie(id: number, pharmacie: Pharmacie): Observable<Pharmacie> {
    return this.http.put<Pharmacie>(`${this.baseUrl}/pharmacies/${id}`, pharmacie);
  }

  deletePharmacieById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletePharmacieById/${id}`);
  }
 /** * getAllPharmacies(): Observable<Pharmacie[]> {
    return this.http.get<Pharmacie[]>(`${this.baseUrl}/getAllPharmacies`).pipe(
      switchMap((pharmacies: Pharmacie[]) => {
        const requests = pharmacies.map((pharmacie: Pharmacie) => {
          return this.http.get<Medicament[]>(`${this.baseUrl}/getMedicamentsByPharmacieId/${pharmacie.id}`).pipe(
            map((medicaments: Medicament[]) => {
              pharmacie.medicaments = medicaments;
              return pharmacie;
            })
          );
        });
  
        return forkJoin(requests);
      })
    );
  }***/
  
}
