import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HygeiaService {

  
  constructor(private http:HttpClient ) { }
  options = { withCredentials: true };
  emailReg:any
  roleReg:any
 public Login(data : any): Observable<any> {
   return this.http.post<any>('http://localhost:8090/login', data,{ withCredentials: true })
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
  console.log(user)
   return this.http.put<any>(`http://localhost:8090/updateUser`,user )
 }
 public addUser(user :any,image: File): Observable<any> {
  const formData = new FormData();
  console.log(user)
  console.log(image)
  formData.append('user', JSON.stringify(user));
  formData.append('image', image, image.name);
  console.log(formData.get('user'))
  console.log(formData.get('image'))

  return this.http.post<any>('http://localhost:8090/addUser/', formData, { withCredentials: true });

 }
 public deleteUser(cin:any): Observable<any> {
   return this.http.delete<any>('http://localhost:8090/deluser/'+`${cin}`, { withCredentials: true })
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
 public uploadImage(formData: FormData): Observable<string> {
  return this.http.post<string>('http://localhost:8090/uploadimage', formData);
}

public updatePassword(form:any,cin:any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Headers" :"*"
  });
  const options = { headers: headers, withCredentials: true };
  return this.http.put<any>('http://localhost:8090/updatePassword/'+`${cin}`,form, {withCredentials : true})
}

}
