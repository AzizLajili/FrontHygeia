import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../treatment.service';
import { Treatment } from '../treatment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-treatment',
  templateUrl: './update-treatment.component.html',
  styleUrls: ['./update-treatment.component.css']
})
export class UpdateTreatmentComponent implements OnInit {

  id: number;
  treatment: Treatment = new Treatment();
  constructor(private treatmentService: TreatmentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.treatmentService.getTreatmentById(this.id).subscribe(data => {
      this.treatment = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.treatmentService.updateTreatment(this.id, this.treatment).subscribe( data =>{
        this.goToTreatmentList();
      }
      , error => console.log(error));
  }

  goToTreatmentList(){
    this.router.navigate(['/treatments']);
  }
}
