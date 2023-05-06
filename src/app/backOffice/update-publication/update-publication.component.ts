import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HygeiaService } from 'src/app/hygeia.service';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent {
  description!:any;
  nom!:any;
  type!:any;

  categ!:any
  constructor(private _service:HygeiaService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
   
  }
}
