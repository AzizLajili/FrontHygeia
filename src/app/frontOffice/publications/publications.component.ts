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

 id:any=localStorage.getItem('session');
  publications!: any[];
  nbrjaim! : number ;
  nbrdislike! : number ;
  nbr!:number;
  element:boolean=false;
  name!:any;

  description!:any;
  nom!:any;
  type!:any;

  categ!:any
  previewImage:any
  toppublications!: any[];
  p: number = 1;
  currentuser!:any
  user!:any
  constructor(private _service:HygeiaService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this._service.getUser(this.id).subscribe(res=>this.currentuser=res)
  this._service.getAllPublications().subscribe(res => {
    this.publications=res
    console.log(res)});
    this._service.getTopPublications().subscribe(res => {
      console.log(res)
      this.toppublications=res});

    console.log(this.id)
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
        getuser(id:any){
          this._service.getUsersBypub(id).subscribe(res=>this.user=res)
          return this.user;
        }

        onFileSelected(event:any) {
          if (event.target.files.length > 0) {
            this.previewImage = event.target.files[0];
            console.log(this.previewImage)
          }
        }

        addPublication(form:any){
         
       
          const image = this.previewImage;
          
          this._service.addPublication(form.value,1,image).subscribe(res=>console.log(res))

          form.reset()
          window.location.reload()
        }
    
        recherchPub(){
          this._service.recherchePublications(this.name).subscribe(res=>this.publications=res)

        }

        tripub(){
          this._service.triPublications().subscribe(res=>{this.publications=res
          console.log(res)
          })
        }

        getpubByType(){

          if(this.categ=="offre" || this.categ=="demande"){
            this._service.getpubBytype(this.categ).subscribe(res=>{this.publications=res
              })
          }
          else{
            this._service.getAllPublications().subscribe(res => {
              this.publications=res});
          }
          
        }

}
