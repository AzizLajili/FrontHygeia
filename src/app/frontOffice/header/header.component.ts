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
  Connected : any

  constructor(private router: Router,){}
  ngOnInit(): void {
    
    if (localStorage.getItem('session') == null){
      this.Connected = false;
    }else{
      this.Connected = true;
    }

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
