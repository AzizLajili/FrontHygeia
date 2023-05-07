/*import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pharmacie } from '../pharmacie';
import { PharmacieService } from '../pharmacie.service';

@Component({
  selector: 'app-pharmacie-form',
  templateUrl: './pharmacie-form.component.html',
  styleUrls: ['./pharmacie-form.component.css']
})
export class PharmacieFormComponent {
  pharmacieForm!: FormGroup;
  submitted = false;
  pharmacie!:any[];
  constructor(private formBuilder: FormBuilder, private pharmacieService: PharmacieService) { }
  id!: number;
  pharmacienResp!: string;
  adresse!: string;
  status!: string;
  dateOuverture!: Date;
  dateFermeture!: Date;

  ngOnInit(): void {
    this.pharmacieForm = this.formBuilder.group({
      pharmacienResp: ['', Validators.required],
      adresse: ['', Validators.required],
      status: ['', Validators.required],
      dateOuverture: ['', Validators.required],
      dateFermeture: ['', Validators.required]
    });
  }

 onSubmit(f:Form) {
   const pharmacie: Pharmacie = {
     id: 0,
      ['pharmacienResp']: this.pharmacieForm.controls['pharmacienResp'].value,
      ['adresse']: this.pharmacieForm.controls['adresse'].value,
     ['status']: this.pharmacieForm.controls['status'].value,
     ['dateOuverture']: this.pharmacieForm.controls['dateOuverture'].value,
      ['dateFermeture']: this.pharmacieForm.controls['dateFermeture'].value
   }



      
      this.pharmacieService.addPharmacie(pharmacie).subscribe(
        (response) => {
          console.log('phramacie added:', response);
        },
        (error) => {
          console.error('Error adding medicament:', error);
        }
        );
        }

       
   
}*/

import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pharmacie } from '../pharmacie';
import { PharmacieService } from '../pharmacie.service';

@Component({
  selector: 'app-pharmacie-form',
  templateUrl: './pharmacie-form.component.html',
  styleUrls: ['./pharmacie-form.component.css']
})
export class PharmacieFormComponent {
  pharmacieForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private pharmacieService: PharmacieService) { }
  id!: number;
  pharmacienResp!: string;
  adresse!: string;
  status!: string;
  dateOuverture!: Date;
  dateFermeture!: Date;
// medicaments!: Medicament[];
  ngOnInit(): void {
    this.pharmacieForm = this.formBuilder.group({
      pharmacienResp: ['', Validators.required],
      adresse: ['', Validators.required],
      status: ['', Validators.required],
      dateOuverture: ['', Validators.required],
      dateFermeture: ['', Validators.required]
    });
  }

  onSubmit() {
    const pharmacie: Pharmacie = {
      id: 0,
      pharmacienResp: this.pharmacieForm.controls['pharmacienResp'].value,
      adresse: this.pharmacieForm.controls['adresse'].value,
      status: this.pharmacieForm.controls['status'].value,
      dateOuverture: this.pharmacieForm.controls['dateOuverture'].value,
      dateFermeture: this.pharmacieForm.controls['dateFermeture'].value
    };

    this.pharmacieService.addPharmacie(pharmacie).subscribe(
      (response) => {
        console.log('pharmacie added:', response);
      },
      (error) => {
        console.error('Error adding pharmacie:', error);
      }
    );
  }
}
