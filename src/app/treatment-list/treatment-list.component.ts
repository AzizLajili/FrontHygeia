import { Component, OnInit } from '@angular/core';
import { Treatment } from '../treatment'
import { TreatmentService } from '../treatment.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css']
})
export class TreatmentListComponent implements OnInit{
  treatments: Treatment[];

  constructor(private treatmentService: TreatmentService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTreatments();
  }

  private getTreatments(){
    this.treatmentService.getTreatmentList().subscribe(data => {
      this.treatments = data
    })
  }

  treatmentDetails(id: number){
    this.router.navigate(['treatment-details', id]);
  }

  updateTreatment(id: number){
    this.router.navigate(['update-treatment', id])
  }

  deleteTreatment(id: number){
    this.treatmentService.deleteTreatment(id).subscribe( data => {
      console.log(data);
      this.getTreatments();
    })
  }
}
