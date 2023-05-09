import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HygeiaService } from '../hygeia.service';
import { MedicamentService } from '../medicament.service';
import { Medicament } from '../medicament';
import { PharmacieService } from '../pharmacie.service';
import { Pharmacie } from '../pharmacie';

@Component({
  selector: 'app-medicament-form',
  templateUrl: './medicament-form.component.html',
  styleUrls: ['./medicament-form.component.css']
})
export class MedicamentFormComponent {
  medicament: Medicament = new Medicament();
  previewImage:any
  uploadImage:any
  pharmacieId:any

  constructor(private http: HttpClient,private hygServ: MedicamentService, private Pharmserv:PharmacieService) {}
  id!: number;
    nom!: string;
    type!: string;
    prix!: number;
    quantite!: number;
  onFileSelected(event:any) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.previewImage = f;
      console.log(f);
    }
  }
   onSubmit(Form:any) {
      const formData = new FormData();
      formData.append('medicament', JSON.stringify(this.medicament));
      formData.append('image', this.uploadImage);
    
      const medicament = Form.value;
      console.log(Form.value["nom"])

      const image = this.previewImage;
      this.hygServ.addMedicament(Form.value, image).subscribe(
        (response) => {
          this.Pharmserv.assignMedicamentToPharmacy(this.pharmacieId,Form.value["nom"]).subscribe(res => console.log(res));
          
          console.log('medicament added:', response);
        },
        (error) => {
          console.error('Error adding medicament:', error);
        }
        );
        }
}

