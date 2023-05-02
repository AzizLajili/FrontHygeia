import { Component } from '@angular/core';
import {TreatmentService} from "../services/treatment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent {
  data!:any;
  addeddata!:any;
  medicament!:string
  constructor(private treatmentService:TreatmentService, private activate_router:ActivatedRoute) {
  }
  getTreatments():void{
    this.treatmentService.getTreatments().subscribe({
      next: (data) => this.data=data,
      error: (err) => console.log(err),
      complete: () => console.log('complete')
    })
  }

  deleteTreatment(record:any):void{
    this.treatmentService.deleteTreatment(record.id).subscribe({
      next: (data) => {console.log(data)
        this.getTreatments();},
      error: (err) => console.log(err),
      complete: () => {
        console.log('complete');
        this.getTreatments();
      }
    }


  )
  }
  ngOnInit():void{
    this.getTreatments();
    this.addeddata={
      "medicament":null,

    }
  }

}
