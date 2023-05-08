import { Component, OnInit } from '@angular/core';
import { Treatment } from '../../treatment';
import { TreatmentService } from '../../treatment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-treatment',
  templateUrl: './create-treatment.component.html',
  styleUrls: ['./create-treatment.component.css']
})
export class CreateTreatmentComponent implements OnInit {

  treatment: Treatment = new Treatment();
  constructor(private treatmentService: TreatmentService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveTreatment(){
    this.treatmentService.createTreatment(this.treatment).subscribe(data =>{
        console.log(data);
        this.goToTreatmentList();
      },
      error => console.log(error));
  }

  goToTreatmentList(){
    this.router.navigate(['/treatments']);
  }

  onSubmit(){
    console.log(this.treatment);
    this.saveTreatment();
  }
}
