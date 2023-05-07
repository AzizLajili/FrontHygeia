import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HygeiaService } from 'src/app/hygeia.service';

@Component({
  selector: 'app-full-register',
  templateUrl: './full-register.component.html',
  styleUrls: ['./full-register.component.css']
})
export class FullRegisterComponent implements OnInit{

  user:any
  previewImage:any
  uploadImage:any
  nomEtablissement:any
  numLicence:any
  cin:any
  nom:any
  email:any
  prenom:any
  adresse:any
  dob:any
  password:any
  genre:any
  role:any

  constructor(private http: HttpClient,private hygServ: HygeiaService,) {}

  ngOnInit(): void {
    this.email = this.hygServ.emailReg
    this.role = this.role =this.hygServ.roleReg
    console.log(this.role)
  }

  
  onFileSelected(event:any) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.previewImage = f;
      console.log(f);
    }
  }
    onSubmit(Form:any) {
      const user = Form.value;
      console.log(Form.value)
      
      console.log(user)
      const image = this.previewImage;
      this.hygServ.addUser(user, image).subscribe(
        (response) => {
          console.log('User added:', response);
          this.hygServ.roleToUser(this.email,this.role).subscribe(
            (response) => {
              console.log('Role Affected:', response);
            },
            (error) => {
              console.error('Error affecting role:', error);
            }
          )
        },
        (error) => {
          console.error('Error adding user:', error);
        }
        );

        
        }    
}

  


