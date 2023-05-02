import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import {config} from "rxjs";
import { DatePipe } from '@angular/common';
import {Router} from "@angular/router";
import Swal from "sweetalert2";

interface Medicament {
  id: number;
  name: String;
}
interface Ordonnance {
  id:number;
  dateOrd: String;
  description: string;
  ordonnancemed: { cin: number };
  ordonnancepatient: { cin: number };
  medicamentList: Medicament[];
}
@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent {
  constructor(private datePipe: DatePipe, private router: Router) { }
    headers :any = {
    'Access-Control-Allow-Origin' : 'http://localhost:8080/*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Content-Type': 'application/json',
  }
   config = {
    headers:this.headers
  }
  ordonnance: Ordonnance = {
    id:0,
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

  onSubmit() {
    console.log(this.ordonnance)
    const ordonnaceMappedRequest: any = this.ordonnance
    ordonnaceMappedRequest.dateOrd=this.datePipe.transform(new Date(ordonnaceMappedRequest.dateOrd), 'dd/MM/yyyy');
    axios.post('/api/Hygeiaa/Ordonnance/add', ordonnaceMappedRequest)
      .then(response => {
        // console.log('Ordonnance ajoutée avec succès', response);
        // Reset the form
        this.ordonnance =response.data
        //   {
        //   id:0,
        //     dateOrd: '',
        //     description: '',
        //     ordonnancemed: { cin: 0 },
        //   ordonnancepatient: { cin: 0 },
        //   medicamentList: []
        // };
        // console.log(this.ordonnance.id)
        console.log(response.data.id)
        console.log(response.data)
        // Swal.fire('Add an image to this Ord '  ,response.data.id,'error');
        Swal.fire({
          icon: 'error',
          title: 'Add an image to this Ord',
          text: `with the ID  ${response.data.id}`
        });
        this.router.navigate(['/ordonnance/uploadimgOrd',this.ordonnance.id])
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de l\'ordonnance', error);
      });
  }


  getTodayDate() {
    return new Date().toISOString().split('T')[0];
  }
  // navigatetouploadpage(){
  //   Swal.fire('Add an image to this Ord ','Commande added succesfully','error');
  //   this.router.navigate(['/ordonnance/uploadimgOrd'])
  // }

}
