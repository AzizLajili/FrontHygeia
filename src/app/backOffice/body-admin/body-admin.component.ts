import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HygeiaService } from 'src/app/hygeia.service';

@Component({
  selector: 'app-body-admin',
  templateUrl: './body-admin.component.html',
  styleUrls: ['./body-admin.component.css']
})
export class BodyAdminComponent implements OnInit {

  id!:number;
  user:any
  listUsers:any
  listpubs!:any
  constructor(private hygeiaService:HygeiaService,private actR:ActivatedRoute) { }

  ngOnInit(): void {
    this.actR.paramMap.subscribe(data => this.id=Number(data.get('param')))

    this.actR.params.subscribe(params => {
      const id = params['param'];

      this.hygeiaService.getUser(id).subscribe(
        (response: any) => {
          this.user = response;
          console.log(response)
        },
        (error:HttpErrorResponse)=>{
          alert(error.message)
        }
      )
    


    });
    this.hygeiaService.getUsers().subscribe(data => {
      this.listUsers = data;
      console.log(this.listUsers)
    })
    this.hygeiaService.getmypub(this.id).subscribe(res=>{
      this.listpubs=res
      console.log(this.listpubs)
    })

  }
  deletePub(id:any){
    this.hygeiaService.deletePub(id).subscribe(res=>console.log(res))
    window.location.reload()
  }


}