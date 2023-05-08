import { Component, OnInit } from '@angular/core';
import { HygeiaService } from 'src/app/hygeia.service';

@Component({
  selector: 'app-side-admin',
  templateUrl: './side-admin.component.html',
  styleUrls: ['./side-admin.component.css']
})
export class SideAdminComponent implements OnInit {

  user:any
  cin:any
  roles!:any[]
  listroles:any
  isadmin:any=false
  isuser:any=false
  ismedecin:any=false
  ispharmacien:any=false


  constructor(private service:HygeiaService,) { }

  ngOnInit(): void {
          // Maintain Scroll Position
          if (typeof localStorage !== 'undefined') {
              if (localStorage.getItem('sidebar-left-position') !== null) {
                  var initialPosition = localStorage.getItem('sidebar-left-position'),
                      sidebarLeft:any = document.querySelector('#sidebar-left .nano-content');
                    
                      sidebarLeft.scrollTop = initialPosition;
              }
          }
          this.cin = localStorage.getItem('session')
          this.getRoles(this.cin)

  }
  getRoles(cin:any){
    this.service.getUser(cin).subscribe(data => {
      this.user= data;
      const num = this.user.roles.length
      for (let i = 0; i < num; i++){
      console.log(this.user.roles[i].role)
      if (this.user.roles[i].role.toString() == "ADMIN"){this.isadmin = true;}     
      if (this.user.roles[i].role.toString() == "USER") {this.isuser = true;}
      if (this.user.roles[i].role.toString()  == "MEDECIN") {this.ismedecin = true;}
      if (this.user.roles[i].role.toString()  == "PHARMACIEN") {this.ispharmacien = true;}
      }

    })
  }

}
