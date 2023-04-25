import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  id!:number
  iduser!:number


  constructor(private router: Router){}
  ngOnInit(): void {
    const userId = localStorage.getItem('session');
    if (userId != null){
      this.id= Number(userId);

    }  }
  
  redirectToProfilePage(): void {
    const userId = localStorage.getItem('session');
    if (userId != null){
      this.iduser= Number(userId);

    }
  }
}
