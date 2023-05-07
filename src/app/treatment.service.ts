import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Treatment } from "./treatment";

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private baseURL = "http://localhost:8090/SpringMVC/servlet/treatments";

  constructor(private httpClient: HttpClient) { }

  getTreatmentList(): Observable<Treatment[]>{
    return this.httpClient.get<Treatment[]>(`${this.baseURL}`);
  }

  createTreatment(treatment: Treatment): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, treatment);
  }

  getTreatmentById(id: number): Observable<Treatment>{
    return this.httpClient.get<Treatment>(`${this.baseURL}/${id}`);
  }

  updateTreatment(id: number, treatment: Treatment): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, treatment);
  }

  deleteTreatment(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
