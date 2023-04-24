

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HygeiaService } from '../../hygeia.service';
import { CookieService } from 'ngx-cookie-service';


interface LoginResponse {
  username: string;
  password:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  username!: string;
  password!: string;
  users!: any[];
  roles!: any[];
  access_token!: string;
  credentials = {username: this.username, password: this.password};
//  constructor(private userservice:UserService) {}
 signUpButton = document.getElementById('signUp');

  constructor(private http:HttpClient,private router:Router,private hygeiaService:HygeiaService,private cookieService: CookieService) { }
  
   getRoles() : void {
    this.hygeiaService.getRoles().subscribe(
      (response: any[]) => {
        this.roles = response;
        console.log(response)
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }
  ngOnInit() {
    const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton?.addEventListener('click', () =>
    container?.classList.add('right-panel-active'));

signInButton?.addEventListener('click', () =>
    container?.classList.remove('right-panel-active'));

    
    this.getRoles();
    console.log(this.getRoles)
  }
  
  onSubmit(form:any){

    const headers = new HttpHeaders(this.credentials ? {
      username : this.username ,
      password : this.password
    } : {})
   // console.log(headers);
    this.http.post('http://localhost:8090/login', {}, {headers: headers})
    .subscribe((response : any)=> {
      console.log(response);
      localStorage.setItem("token", response.access_token)
      this.cookieService.set('Authorization', response.access_token) ;
      localStorage.setItem("email", response.email)
      localStorage.setItem("session", response.CurrentId)

      // const tok = response.access_tocken;
     // console.log(response.valueOf('access_token'))
    //  const token = response['access_token']; // Replace 'token' with the actual name of the property that holds the login token in your response object
    //this.cookieService.set('Authorization', token, { sameSite: 'strict' });
    },(error: HttpErrorResponse) => {
      console.log(error.error.text); 
    });
    this.router.navigate(['/'])
  }

  
  
  
  

}