import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HygeiaService } from 'src/app/hygeia.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publications!: any[];

  nbrjaim! : number ;
  nbrdislike! : number ;
  nbr!:number;
  element:boolean=false;

  constructor(private _service:HygeiaService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  this._service.getAllPublications().subscribe(res => {
    this.publications=res});
    
  }

  showPublicationDetails(id: number): void {
    this.router.navigate(['/publications/'+id]);
  }
 /* getNbrLikeByPublication(id:number){
    this._service.getNbrLikeByPublication(id).subscribe(res => {
      console.log(res);
      this.nbrjaim=res});
    }

    getNbrDislikeByPublication(id:number){
      this._service.getNbrDislikeByPublication(id).subscribe(res => {
        console.log(res);
        this.nbrdislike=res});
      }*/



  /*getnbrCommentaire(idpub:any){
   
     this._service.getNbrCommentByPublication(idpub).subscribe(res=>console.log(res))
    }*/

    toggle() {
     
      return (this.element = true);
  
      }
      toggle2() {
     
        return (this.element = false);
    
        }
    

}
