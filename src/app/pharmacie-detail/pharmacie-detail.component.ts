import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PharmacieService } from 'src/app/pharmacie.service';
import { Pharmacie } from '../pharmacie';
@Component({
  selector: 'app-pharmacie-detail',
  templateUrl: './pharmacie-detail.component.html',
  styleUrls: ['./pharmacie-detail.component.css']
 
})
export class PharmacieDetailComponent implements OnInit {
id!: number;
pharmacie=new Pharmacie();
isEditMode = false;
constructor(
private route: ActivatedRoute,
private router: Router,
private pharmacieService: PharmacieService
) { }

ngOnInit() {
const id = this.route.snapshot.paramMap.get('id');
this.id = parseInt(id ?? '0');
this.getPharmacieById(this.id);
}

getPharmacieById(id: any) {
this.pharmacieService.getPharmacieById(id)
.subscribe((pharmacie: Pharmacie) => {
this.pharmacie = pharmacie;
console.log(pharmacie)
});
}
updatePharmacie() {
this.router.navigate(['/pharmacies', this.id, 'edit']);
}
update(id:any,pharamcie:Pharmacie){
  this.pharmacieService.updatePharmacie(id,pharamcie)
.subscribe(data=>{
  console.log("testttt",data);
})


}
deletePharmacieById() {
if (confirm('Are you sure you want to delete this pharmacy?')) {
this.pharmacieService.deletePharmacieById(this.id)
.subscribe(() => this.router.navigate(['/pharmacies']));
}
}
}