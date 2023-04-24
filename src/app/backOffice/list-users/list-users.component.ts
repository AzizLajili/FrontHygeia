import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HygeiaService } from 'src/app/hygeia.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers:any
  constructor(private router:Router, private service:HygeiaService,private http: HttpClient){}
  ngOnInit(): void {

    this.service.getUsers().subscribe(data => {
      this.listUsers = data;
      console.log(this.listUsers)
    })

  }

}
