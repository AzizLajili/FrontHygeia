import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HygeiaService } from 'src/app/hygeia.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicationbyid',
  templateUrl: './publicationbyid.component.html',
  styleUrls: ['./publicationbyid.component.css']
})
export class PublicationbyidComponent implements OnInit {


  greetings: string[] = [];
  disabled = true;
  name!: string;
  private stompClient: any;




  publication!: any;
  commentaires!: any[];
  idpub!: any;
  descriptions!: String;
  idComm!: any;
  nbrjaime!: any;
  nbrdislike!: any;
  nbrcommentaire!: any

  description!: String;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  test:boolean=false;
  currentuser!: any
  id: any = localStorage.getItem('session');
  user!: any
  constructor(private _service: HygeiaService, private router: Router, private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this._service.getUser(this.id).subscribe(res => this.currentuser = res)

    // this.loadPublication();
    this.idpub = this.route.snapshot.paramMap.get('id');
    this.getPublicationById(this.idpub);
    this.getCommentaireByIdPublication(this.idpub);

    this._service.getNbrLikeByPublication(this.idpub).subscribe(res => this.nbrjaime = res)
    this._service.getNbrDislikeByPublication(this.idpub).subscribe(res => this.nbrdislike = res)
    this._service.getNbrCommentByPublication(this.idpub).subscribe(res => this.nbrcommentaire = res)
    this._service.getUsersBypub(this.idpub).subscribe(res => {
      this.user = res
      console.log(res)
    })
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


  Submit(form: any) {


    let addedData = JSON.stringify(form.value);
    let dateTime = new Date()
    let body = {
      "dateini": dateTime,
      "description": form.value.description
    }
    console.log("form.value", body)
    this._service.addCommentaire(form.value, this.idpub, 1).subscribe(res => {
     if(res==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Votre message contient des mots intérdit!'
      })
     }
     else {
      this.commentaires.push(res)
      form.reset()
    }
    })
    //form.reset();
    //window.location.reload( )
  }
  Delete(id: any) {
    this._service.DeleteCommentaire(id).subscribe(res => console.log(res))
  }
  ModifComment(form: any) {
    let addedData = JSON.stringify(form.value);
    console.log(addedData)
    let dateTime = new Date()
    let body = {
      id: this.idComm,
      dateini: dateTime,
      description: form.value.description
    }
    this._service.ModifeCommentaire(body, this.idpub).subscribe(res => console.log(res))
    form.reset();

  }
  insertId(id: any) {
    this.idComm = id;
    console.log(this.idComm)
  }

  addJaime() {
    let body = {
      dislike: 'false',
      jaime: 'true'
    }
    this._service.addlike(body, this.idpub, 1).subscribe(res => {
      console.log(res)
      if (res == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vous avez déja récter sur cette publication!'
        })
      }else{
        window.location.reload()
      }

    })

    //  window.location.reload()

  }
  addDislike() {
    let body = {
      dislike: 'true',
      jaime: 'false'
    }
    console.log(body)
    this._service.adddislike(body, this.idpub, 1).subscribe(res =>{
      console.log(res)
      if (res == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vous avez déja récter sur cette publication!'
        })
      }
      else{
        window.location.reload()
      }

    })
    // window.location.reload()

  }

  delet(id:any){
    this._service.DeleteCommentaire(id).subscribe(res=>console.log(res))
    window.location.reload()
  }


}
