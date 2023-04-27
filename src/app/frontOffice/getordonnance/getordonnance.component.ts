import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getordonnance',
  templateUrl: './getordonnance.component.html',
  styleUrls: ['./getordonnance.component.css']
})
export class GetordonnanceComponent {
  ordonnances: any[] = [];
  headers :any = {
    'Access-Control-Allow-Origin' : 'http://localhost:8080/*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  }
  config = {
    headers:this.headers
  }

  constructor(private router: Router) {
    this.getOrdonnances();
  }
  getOrdonnances() {
    axios.get('/api/Hygeiaa/Ordonnance/retrieveAll')
      .then(response => {
        this.ordonnances = response.data;
      })
      .catch(error => {
        console.log(error);
        alert('Failed to retrieve Ordonnances');
      });
  }
  deleteOrdonnance(ordonnance:any){
    console.log('Selected ID:', ordonnance.id);
    axios.delete(`/api/Hygeiaa/Ordonnance/delete/${ordonnance.id}`)
      .then(response => {
        console.log(response);
        alert('Ordonnance Deleted Successfully');
      })
      .catch(error => {
        console.log(error);
        alert('Failed to Delete Ordonnance');
      });
  }

navigatetoaddpage(){
  this.router.navigate(['/ordonnance']);
}
  navigatetoupdatepage(){
this.router.navigate(['/updateordonnance'])
  }
  navigatetouploadpage(){
    this.router.navigate(['/uploadimgOrd'])

  }
}
