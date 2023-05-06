import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { NgForm,  FormBuilder, FormControl, AbstractControl, Validators, FormGroup,
} from '@angular/forms';
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
  constructor(private hygeiaService:HygeiaService,private actR:ActivatedRoute,private formBuilder: FormBuilder) { }
  
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
  publications:any


  body:any
  newPasswordd: string ='test';
  reNewPassword: string ='test';
  passwordsMatch = false;


  name = 'Angular ' + VERSION.major;
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);
  oldPassword = new FormControl();
  resetPasswordForm = this.formBuilder.group(
    {
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
      oldPassword : this.oldPassword,
    },
    {
      validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
    }
  );
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
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

    
    this.hygeiaService.getAllPublications().subscribe(data => {
      this.publications = data;
      console.log(this.publications)
    })
    this.hygeiaService.getUsers().subscribe(data => {
      this.listUsers = data;
      console.log(this.listUsers)
    })
    


    }
    
  
  onSubmit (form: any){
    let body={
    "cin" : this.id,
    "nom" : form.user.nom,
    "prenom" : form.user.prenom ,
    "adresse" : form.user.adresse,
    "dob " : form.user.dob ,
    "password" : form.user.password,
    "image": form.user.image,
    "specialité" : form.user.specialité,
    "numLicence" : form.user.numLicence,
    "genre": form.user.genre,
    "email": form.user.email,
    "verificationCode": form.user.verificationCode,
    "nomEtablissement": form.user.nomEtablissement,
    "zoneLivraison": form.user.zoneLivraison,
    "allegies" : form.user.allegies,
    
    }
    this.hygeiaService.updateUser(body).subscribe( res =>console.log(res) )
    window.location.reload();
  }




 onSubmitPW() {
  console.log(this.resetPasswordForm);
  console.log(this.resetPasswordForm.value.newPassword);
  console.log(this.resetPasswordForm.value.confirmPassword);
  console.log(this.resetPasswordForm.value.oldPassword);


  let PWForm = {
    'email': this.resetPasswordForm.value.oldPassword,
    'password' : this.resetPasswordForm.value.newPassword

  }
  console.log(PWForm);
  console.log(localStorage.getItem("session"));

  this.hygeiaService.updatePassword(PWForm,localStorage.getItem("session")).subscribe();
}
  }



