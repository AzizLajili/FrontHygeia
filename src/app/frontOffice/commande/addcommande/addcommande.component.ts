
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import {config} from "rxjs";
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";
interface Medicament {
  id: number;
  name: String;
}
interface Ordonnance {
  id: number;
  date: string;
  patient: any;
  medicament: any[];
}

@Component({
  selector: 'app-addcommande',
  templateUrl: './addcommande.component.html',
  styleUrls: ['./addcommande.component.css']
})
export class AddcommandeComponent implements OnInit {
  commande: any ={
    orderDate:"",
    status:"",
    commandepatient:0,
    ordonnances:[],
    medicaments:[],
  };
  displayedOrdonnances:any[]=[];


  constructor(private datePipe: DatePipe) {
  }


  headers: any = {
    'Access-Control-Allow-Origin': 'http://localhost:8090/*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  }
  config = {
    headers: this.headers
  }
  medicamnettoadd :any[] =[];
  addmedicament(events: any){
    console.log(events)
    if (!this.commande.medicaments.includes(events.id)) {
      this.commande.medicaments.push(events.id)
    }
    console.log(this.commande)
  }
  ordonnances: Ordonnance[] = [];
  addordonnance(events: any){
    console.log(this.commande)
    if (!this.commande.ordonnances.includes(events.id)) {
      this.displayedOrdonnances.push(events)
      this.commande.ordonnances.push(events.id)
    }
    console.log(this.commande)
    console.log(this.displayedOrdonnances)
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
  medicaments: Medicament[] = [
    {id: 1, name: 'panadol'},
    {id: 2, name: 'adol'},
  ];
  ngOnInit() {
    this.getOrdonnances();
  }

  onSubmit() {
    console.log(this.commande)
    const commandeMappedRequest: any = this.commande
    commandeMappedRequest.orderDate = this.datePipe.transform(new Date(commandeMappedRequest.orderDate), 'dd/MM/yyyy');
    commandeMappedRequest.status="pas encore approuvé"
    axios.post('http://localhost:8090/Commande/add', commandeMappedRequest,{withCredentials : true})
      .then(response => {
        // console.log('Commande ajoutée avec succès', response);
        Swal.fire({
          icon: 'success',
          title: 'Commande added successfully',
          // text: `with the ID  ${response.data.id}`
        });
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du commande', error);
      });
  }

  getTodayDate() {
    return new Date().toISOString().split('T')[0];
  }

}
