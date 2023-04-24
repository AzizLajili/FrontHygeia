import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body-admin',
  templateUrl: './body-admin.component.html',
  styleUrls: ['./body-admin.component.css']
})
export class BodyAdminComponent implements OnInit {

  id!:number;

  constructor(private actR:ActivatedRoute) { }

  ngOnInit(): void {
    this.actR.paramMap.subscribe(data => this.id=Number(data.get('param')))
    const id= localStorage.getItem("session")
  }

}
