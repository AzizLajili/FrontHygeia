import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HygeiaService } from 'src/app/hygeia.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient,private hygeiaService:HygeiaService,private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  redirectToProfilePage(): void {
    const userId = localStorage.getItem('userId');
    this.router.navigate(['/profile', userId]);
  }

 
  logout(): void {
    // delete all cookies
    const cookies: string[] = Object.keys(this.cookieService.getAll());
    cookies.forEach((cookie: string) => {
      console.log(cookie)
      this.cookieService.delete(cookie, '/', 'localhost:8090', true);
    });

    // clear local storage
    localStorage.clear();
  }
}
