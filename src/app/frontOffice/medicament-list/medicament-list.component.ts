import { Component, OnInit } from '@angular/core';
import { Medicament } from '../../medicament';
import { MedicamentService } from '../../medicament.service';
import { HygeiaService } from 'src/app/hygeia.service';
@Component({
  selector: 'app-medicament-list',
  templateUrl: './medicament-list.component.html',
  styleUrls: ['./medicament-list.component.css']
})
export class MedicamentListComponent implements OnInit {
  medicaments: Medicament[] = [];
  constructor(private medicamentService :MedicamentService, private hygeiaServ : HygeiaService) {}
  ngOnInit(): void {
    this.getMedicaments();
  }
 getMedicaments(){
  this.medicamentService.getMedicamentsList().subscribe(data=>{
    this.medicaments = data,
    console.log(data)
  } )
}
}

