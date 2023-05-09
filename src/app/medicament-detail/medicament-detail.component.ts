import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicamentService } from 'src/app/medicament.service';
import { Medicament } from '../medicament';

@Component({
  selector: 'app-medicament-detail',
  templateUrl: './medicament-detail.component.html',
  styleUrls: ['./medicament-detail.component.css']
})
export class MedicamentDetailComponent implements OnInit {
  id!: number;

  medicament = new Medicament();
  isEditMode = false;
  cancel = () => {};
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicamentService: MedicamentService
  ) {}

  ngOnInit() {
    const nom = this.route.snapshot.paramMap.get('nom');
  if (nom) {
    this.getMedicamentByName(nom);
  }
  }
  
  getMedicamentByName(nom: string) {
    this.medicamentService.getMedicamentByName(nom)
      .subscribe((medicament: Medicament) => {
        this.medicament = medicament;
        console.log(medicament);
      });
  }

 
  updateMedicament() {
    this.router.navigate(['/medicaments', this.medicament.nom, 'edit']);
  }

  update(nom: string, medicament: Medicament) {
    this.medicamentService.updateMedicament(nom, medicament)
      .subscribe(data => {
        console.log("Updated medicament:", data);
      });
  }

  deleteMedicament() {
    if (confirm('Are you sure you want to delete this medicament?')) {
      this.medicamentService.deleteMedicament(this.medicament.id)
        .subscribe(() => this.router.navigate(['/medicaments']));
    }
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Add your file handling logic here
  }
}
