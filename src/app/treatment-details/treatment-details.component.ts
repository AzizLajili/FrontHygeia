import { Component, OnInit } from '@angular/core';
import { Treatment } from '../treatment';
import { ActivatedRoute } from '@angular/router';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrls: ['./treatment-details.component.css']
})
export class TreatmentDetailsComponent implements OnInit {

  id: number
  treatment: Treatment
  constructor(private route: ActivatedRoute, private treatmentService: TreatmentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.treatment = new Treatment();
    this.treatmentService.getTreatmentById(this.id).subscribe( data => {
      this.treatment = data;
    });
  }
}
