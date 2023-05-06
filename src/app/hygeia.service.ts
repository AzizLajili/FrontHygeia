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
 
 getAllPublications(): Observable<any> {
  return this.http.get<any>("http://localhost:8090/GetAllPublication");
}

getNbrLikeByPublication(id:number)  {
  return this.http.get<number>("http://localhost:8090/getNbrJaimeByIdPublication/"+id);
}
getNbrDislikeByPublication(id:number)  {
  return this.http.get<any>("http://localhost:8090/getNbrDislikeByIdPublication/"+id);
}


getPublicationById(id: any): Observable<any> {
  return this.http.get<any>("http://localhost:8090/Publications/"+`${id}`);
}


addPublication(pub:any,id:any,image:File){
  
  const formData = new FormData();
  console.log(pub)
  formData.append('publication', JSON.stringify(pub));
  formData.append('image', image, image.name);
  return this.http.post<any>("http://localhost:8090/addPublication/"+`${id}`,formData);
    }

getCommentaireByIdPublication(id:any):Observable<any> {
  return this.http.get<any>("http://localhost:8090/getCommentaireByPublication/"+`${id}`);
}

addCommentaire(commentaire:any,id:any,iduser:any){
  return this.http.post<any>("http://localhost:8090/addCommentaire/"+`${id}`+"/"+`${iduser}`,commentaire,this.httpOptions);
    }

  DeleteCommentaire(id:any):Observable<any> {
    return this.http.delete<any>("http://localhost:8090/deleteCommentaire/"+`${id}`);
  }
ModifeCommentaire(commentaire:any,id:any){
    return this.http.put<any>("http://localhost:8090/updateCommentaire/"+`${id}`,commentaire,this.httpOptions);
      }
addInteraction(interaction:any,id:any,iduser:any){
      return this.http.post<any>("http://localhost:8090/addInteraction/"+`${id}`+"/"+`${iduser}`,interaction,this.httpOptions);
        }

      getNbrCommentByPublication(id:any)  {
        return this.http.get<any>("http://localhost:8090/getNbrCommentaireByPublication/"+`${id}`);
      }
      getTopPublications(): Observable<any> {
        return this.http.get<any>("http://localhost:8090/GetTopPublication");
      }


      recherchePublications(nom:any): Observable<any> {
        return this.http.get<any>("http://localhost:8090/recherchepublication/"+`${nom}`);
      }

      triPublications(): Observable<any> {
        return this.http.get<any>("http://localhost:8090/triPublication");
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

      getpubBytype(type:any):Observable<any> {
        return this.http.get<any>("http://localhost:8090/getPublicationByType/"+`${type}`);
      }

     
      
}
