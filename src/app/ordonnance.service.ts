import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {

  constructor(private http:HttpClient ,private route: ActivatedRoute) { }
  options = { withCredentials: true};


  public deleteOrd(id:any): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/Ordonnance/delete/'+`${id}`, this.options)
  }
  public getAllOrd(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/Ordonnance/retrieveAll', this.options)
  }
  public updateOrd(id:any): Observable<any>{
    return this.http.put<any>('http://localhost:8080/Ordonnance/update/'+`${id}`, this.options)
  }
  public addOrd(ord:any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/Ordonnance/add',ord, this.options)
  }
  public getAllCom(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/Commande/retrieveAll', this.options)
  }


  }
