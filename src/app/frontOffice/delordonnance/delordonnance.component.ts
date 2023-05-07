import { Component } from '@angular/core';
import axios from 'axios';
import Swal from "sweetalert2";
@Component({
  selector: 'app-delordonnance',
  templateUrl: './delordonnance.component.html',
  styleUrls: ['./delordonnance.component.css']
})
export class DelordonnanceComponent {
  headers :any = {
    'Access-Control-Allow-Origin' : 'http://localhost:8090/*',
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
    axios.get('http://localhost:8090/Ordonnance/retrieveAll',{withCredentials : true})
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
    axios.delete(`http://localhost:8090/Ordonnance/delete/${this.selectedOrdonnanceId}`,{withCredentials : true})
      .then(response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Ord deleted successfully',
          text: `with the ID  ${response.data.id}`
        });
        alert('Ordonnance Deleted Successfully');
      })
      .catch(error => {
        console.log(error);
        alert('Failed to Delete Ordonnance');
      });
  }

}
