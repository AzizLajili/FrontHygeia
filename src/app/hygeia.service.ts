import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HygeiaService {

  
  constructor(private http:HttpClient ) { }
  options = { withCredentials: true };
 public Login(data : any): Observable<any> {
   return this.http.post<any>('http://localhost:8090/login', data)
 }

 public Logout(): Observable<any> {
   return this.http.get('http://localhost:8090/logout')
 }

 public getUsers(): Observable<any> {
   return this.http.get<any>('http://localhost:8090/allusers', { withCredentials: true })
 }
 public getUser(cin : any): Observable<any> {
   return this.http.get<any>(`http://localhost:8090/user/${cin}`, { withCredentials: true })
 }
 public updateUser(user :any): Observable<any> {
   return this.http.post<any>(`http://localhost:8090/addUser/`,user )
 }
 public addUser(): Observable<any> {
   
   return this.http.get<any>('http://localhost:8090/allusers')
 }
 public deleteUser(): Observable<any> {
   return this.http.get<any>('http://localhost:8090/allusers')
 }
 public getRoles(): Observable<any[]> {
   return this.http.get<any[]>('http://localhost:8090/allroles')
 }
 public addRole(): Observable<any> {
   return this.http.get<any>('http://localhost:8090/allusers')
 }
 public deleteRole(): Observable<any> {
   return this.http.get<any>('http://localhost:8090/allusers')
 }



}
