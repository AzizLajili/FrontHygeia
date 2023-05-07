import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

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
    axios.get('http://localhost:8080/Ordonnance/retrieveAll')
      .then(response => {
        this.ordonnances = response.data;
      })
      .catch(error => {
        console.log(error);
        alert('Failed to retrieve Ordonnances');
      });
  }
  getOrdonnanceImage(ordonnance:any): string {
    return `data:image/jpeg;base64,${ordonnance.data}`;
  }
  deleteOrdonnance(ordonnance:any){
    console.log('Selected ID:', ordonnance.id);
    axios.delete(`http://localhost:8080/Ordonnance/delete/${ordonnance.id}`)
      .then(response => {
        console.log(response);

        Swal.fire({
          icon: 'success',
          title: 'Ord deleted successfully',
          text: `with the ID  ${response.data.id}`
        });        this.getOrdonnances();
      })
      .catch(error => {
        console.log(error);
        alert('Failed to Delete Ordonnance');
      });
  }
  updateOrdonnance(ordonnance:any){
    console.log('Selected ID:', ordonnance.id);

  }

  navigatetoaddpage(){
    this.router.navigate(['/ordonnance/ordonnance']);
  }
  navigatetoupdatepage(){
    this.router.navigate(['/ordonnance/updateordonnance'])
  }
  navigatetouploadpage(){
    this.router.navigate(['/ordonnance/uploadimgOrd'])
  }

}
