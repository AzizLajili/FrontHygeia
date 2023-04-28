import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import Swal from "sweetalert2"
@Component({
  selector: 'app-gerercommande',
  templateUrl: './gerercommande.component.html',
  styleUrls: ['./gerercommande.component.css']
})
export class GerercommandeComponent {
  commande: any[] = [];
  headers :any = {
    'Access-Control-Allow-Origin' : 'http://localhost:8080/*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  }
  config = {
    headers:this.headers
  }
  selectedCommandeId: any;
  constructor(private router: Router) {
    this.selectedCommandeId = null;
    this.getCommandes();
  }
  getCommandes() {
    axios.get('/api/Hygeiaa/Commande/retrieveAll')
      .then(response => {
        this.commande = response.data;
        console.log(response)
      })
      .catch(error => {
        console.log(error);
        alert('Failed to retrieve Commands');
      });
  }
  deleteCommande(commande:any){
    console.log('Selected ID:', commande.id);
    axios.delete(`/api/Hygeiaa/Commande/delete/${commande.id}`)
      .then(response => {
        console.log(response);
        // alert('Commande Deleted Successfully');
        Swal.fire('Deleted ','Commande deleted succesfully','error');
        this.getCommandes()
      })
      .catch(error => {
        console.log(error);
        alert('Failed to Delete Commande');
      });
  }

  getprice(commande:any){
    console.log('Selected ID:', commande.id);
    axios.get(`/api/Hygeiaa/Commande/commandes/${commande.id}/prixtotal`)
      .then(response => {
        console.log(response);
        this.getCommandes()

      })
      .catch(error => {
        console.log(error);
      });

  }
  approuved(commande:any){
    console.log('status', commande.status);
    axios.put(`/api/Hygeiaa/Commande/updatestatus/${commande.id}`)
      .then(response => {
        console.log(response);
        Swal.fire('Approved!! ','check your phone','success');
        this.getCommandes()
        return axios.get(`/api/Hygeiaa/Commande/sendSMS/${commande.id}`)
      })
      .catch(error => {
        console.log(error);
        alert("try again")
      });

  }
  navigatetoaddpage(){
    this.router.navigate(['/commande/Commande']);
  }
  navigatetoupdatepage(){
    this.router.navigate(['/updatecommande'])
  }
  relaod(){
    this.router.navigate(['/getcommands']);
  }

}
