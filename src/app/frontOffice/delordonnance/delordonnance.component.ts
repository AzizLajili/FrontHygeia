import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-delordonnance',
  templateUrl: './delordonnance.component.html',
  styleUrls: ['./delordonnance.component.css']
})
export class DelordonnanceComponent {
  headers :any = {
    'Access-Control-Allow-Origin' : 'http://localhost:8080/*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  }
  config = {
    headers:this.headers
  }
  ordonnances: any[] = [];
  selectedOrdonnanceId: any;
  constructor() {
    this.selectedOrdonnanceId = null;
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
  deleteOrdonnance() {
    console.log('Selected ID:', this.selectedOrdonnanceId);
    axios.delete(`/api/Hygeiaa/Ordonnance/delete/${this.selectedOrdonnanceId}`)
      .then(response => {
        console.log(response);
        alert('Ordonnance Deleted Successfully');
      })
      .catch(error => {
        console.log(error);
        alert('Failed to Delete Ordonnance');
      });
  }

}