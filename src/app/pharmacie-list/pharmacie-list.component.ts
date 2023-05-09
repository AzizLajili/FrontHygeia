import { Component, OnInit } from '@angular/core';
import { PharmacieService } from '../pharmacie.service';

@Component({
  selector: 'app-pharmacie-list',
  templateUrl: './pharmacie-list.component.html',
  styleUrls: ['./pharmacie-list.component.css']
})
export class PharmacieListComponent implements OnInit {

  pharmacies!:any[];
constructor(private service:PharmacieService){}
  ngOnInit(): void {
    console.log("hhh")
    this.service.getAllPharmacies().subscribe(res=>{this.pharmacies=res
    console.log(res)
    })
  }
}
