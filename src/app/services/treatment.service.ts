import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string='http://localhost:8090/SpringMVC/servlet/treatments'

  getTreatments():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
}

