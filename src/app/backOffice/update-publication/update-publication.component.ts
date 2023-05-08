import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HygeiaService } from 'src/app/hygeia.service';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent {
  description!:any;
  nom!:any;
  type!:any;

  categ!:any
  idpub!:any
  publication!:any
  id:any=localStorage.getItem('session');
  test:boolean=false
  test1:boolean=false
  test2:boolean=false
  constructor(private _service:HygeiaService,private router:Router,private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idpub=this.route.snapshot.paramMap.get("idPub");
    this._service.getPublicationById(this.idpub).subscribe(res=>{
      
      this.publication=res
      this.description=this.publication.description
      this.type=this.publication.type
      this.nom=this.publication.nom
    })
    
  }

  modifpublication(form:any){
    let body ={
      "id": this.idpub,
      "nom": this.nom,
      "description": this.description,
      "image": this.publication.image,
      "type": this.type
    }
    console.log(body)
    this._service.updatePublication(body,this.id).subscribe(res=>console.log(res))
  }

  VerifTitre(){
    const titre=document.getElementById("name");
    if(/^[a-zA-Z0-9]+$/.test(this.nom) && titre !=null){
      titre.style.borderColor = "green";
      this.test1=true

      
    }else if(titre !=null && !/^[a-zA-Z0-9]+$/.test(this.nom)){
      titre.style.borderColor = "red";
      this.test1=false
    }
  }

  VerifDesc(){
    const des=document.getElementById("message");
    if(/^[a-zA-Z0-9]+$/.test(this.description) && des !=null){
      des.style.borderColor = "green";
      this.test2=true
      
    }else if(des !=null && !/^[a-zA-Z0-9]+$/.test(this.description)){
      des.style.borderColor = "red";
      this.test2=false
    }
  }




}
