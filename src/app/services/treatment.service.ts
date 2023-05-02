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
  deleteUrl:string='http://localhost:8090/SpringMVC/servlet/deleteTreatment/'
  addUrl:string='http://localhost:8090/SpringMVC/servlet/AddTreatment'

  getTreatments():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  deleteTreatment(id:any):Observable<any>{
    return this.httpClient.delete(this.deleteUrl+id);
  }

  addTreatments(body:any):Observable<any>{
    return this.httpClient.post(this.addUrl,body);
  }
}

