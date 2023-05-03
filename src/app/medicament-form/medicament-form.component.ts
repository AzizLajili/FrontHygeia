import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HygeiaService } from '../hygeia.service';
import { MediacamentService } from '../medicament.service';

@Component({
  selector: 'app-medicament-form',
  templateUrl: './medicament-form.component.html',
  styleUrls: ['./medicament-form.component.css']
})
export class MedicamentFormComponent {

  previewImage:any
  uploadImage:any
  constructor(private http: HttpClient,private hygServ: MediacamentService,) {}
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
      const medicament = Form.value;
      console.log(Form.value)

      const image = this.previewImage;
      this.hygServ.addMedicament(Form.value, image).subscribe(
        (response) => {
          console.log('medicament added:', response);
        },
        (error) => {
          console.error('Error adding medicament:', error);
        }
        );
        }
}

