import { Component } from '@angular/core';
import { Medicament } from '../medicament';
import { ActivatedRoute, Router } from '@angular/router'
import { MedicamentService } from 'src/app/medicament.service';
@Component({
  selector: 'app-medicamentdetail',
  templateUrl: './medicamentdetail.component.html',
  styleUrls: ['./medicamentdetail.component.css']
})
export class MedicamentdetailComponent {
  nom!: string;
  id!:number;
  medicament!: Medicament;
  isEditMode = false;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicamentService : MedicamentService
  ) { }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }
  ngOnInit() {
    
  
    this.getMedicamentByName(this.nom);
  }
  cancel(): void {
    // code to cancel the editing of the medicament
  }
  
  getMedicamentByName(nom: string) {
    this.medicamentService.getMedicamentByName(nom)
      .subscribe(Medicament => this.medicament = this.medicament);
  }
  
  updateMedicament() {
    this.router.navigate(['/medicaments', this.nom, 'edit']);
  }
  
  deleteMedicament(id: number) {
    if (confirm('Are you sure you want to delete this med?')) {
      this.medicamentService.deleteMedicament(this.id)
        .subscribe(() => this.router.navigate(['/medicaments']));
    }
  }
}
