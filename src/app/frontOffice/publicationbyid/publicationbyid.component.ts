import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HygeiaService } from 'src/app/hygeia.service';

@Component({
  selector: 'app-publicationbyid',
  templateUrl: './publicationbyid.component.html',
  styleUrls: ['./publicationbyid.component.css']
})
export class PublicationbyidComponent implements OnInit {
 

  greetings: string[] = [];
  disabled = true;
  name!: string;
  private stompClient :any;




  publication!: any;
  commentaires!: any[];
  idpub!:any;
  descriptions!:String;
  idComm!:any;
  nbrjaime!:any;
  nbrdislike!:any;
  
  description!:String;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private _service:HygeiaService,private router:Router,private http:HttpClient,private route: ActivatedRoute) { }
  ngOnInit(): void {
    // this.loadPublication();
    this.idpub = this.route.snapshot.paramMap.get('id');
    this.getPublicationById(this.idpub);
    this.getCommentaireByIdPublication(this.idpub);

    this._service.getNbrLikeByPublication(this.idpub).subscribe(res => this.nbrjaime=res)
    this._service.getNbrDislikeByPublication(this.idpub).subscribe(res => this.nbrdislike=res)
   }

   getPublicationById(id: any): void {
    this._service.getPublicationById(id)
      .subscribe(
        res => {
          console.log(res);
          this.publication = res
      });
  }
  getCommentaireByIdPublication(id: any): void {
    this._service.getCommentaireByIdPublication(id)
      .subscribe(
        res => {
          console.log(res);
          this.commentaires = res
      });
  }

 Submit(form:any) {

    console.log("form.value", form.value)
    let addedData = JSON.stringify(form.value);
    let dateTime = new Date()
    let body = {
      dateini:dateTime,
      description: form.value.description
    }
  this._service.addCommentaire(body,this.idpub).subscribe(res =>{
    console.log(res)

  })
  form.reset();
  }
  Delete(id:any){
    this._service.DeleteCommentaire(id).subscribe(res => console.log(res))
  }
  ModifComment(form:any){
    let addedData = JSON.stringify(form.value);
    console.log(addedData)
    let dateTime = new Date()
    let body = {
      id:this.idComm,
      dateini:dateTime,
      description: form.value.description
    }
    this._service.ModifeCommentaire(body,this.idpub).subscribe(res => console.log(res))
    form.reset();

  }
  insertId(id:any){
this.idComm=id;
console.log(this.idComm)
  }

  addJaime(){
    let body = {
      dislike:false,
      jaime:true
    }
    this._service.addInteraction(body,this.idpub).subscribe(res =>console.log(res))

  }
  addDislike(){
    let body = {
      dislike:true,
      jaime:false
    }
    this._service.addInteraction(body,this.idpub).subscribe(res =>console.log(res))

  }

 

}
