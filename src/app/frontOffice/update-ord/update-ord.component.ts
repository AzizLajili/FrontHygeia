import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import axios from 'axios';
import {GetordonnanceComponent} from "../getordonnance/getordonnance.component";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

interface Medicament {
  id: number;
  name: String;
}
interface Ordonnance {
  dateOrd: String;
  description: string;
  ordonnancemed: { cin: number };
  ordonnancepatient: { cin: number };
  medicamentList: Medicament[];
}
@Component({
  selector: 'app-update-ord',
  templateUrl: './update-ord.component.html',
  styleUrls: ['./update-ord.component.css']
})
export class UpdateOrdComponent implements OnInit{
  constructor(private datePipe: DatePipe,private route:ActivatedRoute) {
    this.selectedOrdonnanceId = null;
    this.getOrdonnances();
  }

  ngOnInit(): void {
    this.selectedOrdonnanceId=+this.route.snapshot.params['id'];
  }

  ordonnances: any[] = [];
  selectedOrdonnanceId: any;
  headers :any = {
    'Access-Control-Allow-Origin' : 'http://localhost:8090/*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  }
  config = {
    headers:this.headers
  }
  ordonnance: Ordonnance = {
    dateOrd: '',
    description: '',
    ordonnancemed: { cin: 0 },
    ordonnancepatient: { cin: 0 },
    medicamentList: []
  };
  medicaments: Medicament[] = [
    { id: 1, name: 'panadol' },
    { id: 2, name: 'adol' },
  ];
  getTodayDate() {
    return new Date().toISOString().split('T')[0];
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
  // onSubmit(){
  //   if (this.selectedOrdonnanceId) {
  //     const ordonnaceMappedRequest: any = this.ordonnance
  //     ordonnaceMappedRequest.dateOrd=this.datePipe.transform(new Date(ordonnaceMappedRequest.dateOrd), 'dd/MM/yyyy');
  //     console.log(ordonnaceMappedRequest)
  //     axios.put(`/api/Hygeiaa/Ordonnance/update/${this.selectedOrdonnanceId}`,ordonnaceMappedRequest)
  //       .then(response => {
  //         console.log(response.data);
  //         alert('Ordonnance updated successfully!');
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         alert('An error occurred while updating the ordonnance.');
  //       });
  //   }
  // }
  onSubmit(){
    if (this.selectedOrdonnanceId) {
      const ordonnaceMappedRequest: any = this.ordonnance
      ordonnaceMappedRequest.dateOrd=this.datePipe.transform(new Date(ordonnaceMappedRequest.dateOrd), 'dd/MM/yyyy');
      console.log(ordonnaceMappedRequest)
      axios.put(`http://localhost:8090/Ordonnance/update/${this.selectedOrdonnanceId}`,ordonnaceMappedRequest,{withCredentials : true})
        .then(response => {
          console.log(response.data);
          // alert('Ordonnance updated successfully!');
          Swal.fire({
            icon: 'success',
            title: 'Ordonnance updated successfully',
            // text: `with the ID  ${response.data.id}`
          });
        })
        .catch(error => {
          console.log(error);
          alert('An error occurred while updating the ordonnance.');
        });
    }
  }

}
