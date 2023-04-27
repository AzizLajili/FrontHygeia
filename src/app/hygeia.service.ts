import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HygeiaService {

  
  constructor(private http:HttpClient ,private route: ActivatedRoute) { }
  options = { withCredentials: true };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
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

 getAllPublications(): Observable<any> {
  return this.http.get<any>("http://localhost:8090/SpringMVC/servlet/GetAllPublication");
}

getNbrLikeByPublication(id:number)  {
  return this.http.get<number>("http://localhost:8090/SpringMVC/servlet/getNbrJaimeByIdPublication/"+id);
}
getNbrDislikeByPublication(id:number)  {
  return this.http.get<any>("http://localhost:8090/SpringMVC/servlet/getNbrDislikeByIdPublication/"+id);
}


getPublicationById(id: any): Observable<any> {
  return this.http.get<any>("http://localhost:8090/SpringMVC/servlet/Publications/"+`${id}`);
}


addPublication(publication:any){
  return this.http.post<any>("http://localhost:8090/SpringMVC/servlet/addPublication",publication);
    }

getCommentaireByIdPublication(id:any):Observable<any> {
  return this.http.get<any>("http://localhost:8090/SpringMVC/servlet/getCommentaireByPublication/"+`${id}`);
}

addCommentaire(commentaire:any,id:any){
  return this.http.post<any>("http://localhost:8090/SpringMVC/servlet/addCommentaire/"+`${id}`,commentaire,this.httpOptions);
    }

  DeleteCommentaire(id:any):Observable<any> {
    return this.http.delete<any>("http://localhost:8090/SpringMVC/servlet/deleteCommentaire/"+`${id}`);
  }
ModifeCommentaire(commentaire:any,id:any){
    return this.http.put<any>("http://localhost:8090/SpringMVC/servlet/updateCommentaire/"+`${id}`,commentaire,this.httpOptions);
      }
addInteraction(interaction:any,id:any){
      return this.http.post<any>("http://localhost:8090/SpringMVC/servlet/addInteraction/"+`${id}`,interaction,this.httpOptions);
        }

      getNbrCommentByPublication(id:any)  {
        return this.http.get<any>("http://localhost:8090/SpringMVC/servlet/getNbrCommentaireByPublication/"+`${id}`);
      }

}
