import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import {OrdonnanceComponent} from "./frontOffice/ordonnance/ordonnance.component";
import {DelordonnanceComponent} from "./frontOffice/delordonnance/delordonnance.component";
import {GetordonnanceComponent} from "./frontOffice/getordonnance/getordonnance.component";
import {UploadimgOrdComponent} from "./frontOffice/uploadimg-ord/uploadimg-ord.component";
import {UpdateOrdComponent} from "./frontOffice/update-ord/update-ord.component";
import {GerercommandeComponent} from "./frontOffice/commande/gerercommande/gerercommande.component";
import {UpdatecommandeComponent} from "./frontOffice/commande/updatecommande/updatecommande.component";
import {AddcommandeComponent} from "./frontOffice/commande/addcommande/addcommande.component";

const routes: Routes = [{
  path:'admin',
  component:AllTemplateAdminComponent,
  children:[
    {
      path:'admin',
      component:BodyAdminComponent
    }
  ]

},
  { path:'ordonnance', component:OrdonnanceComponent},
  {path:'delordonnance',component:DelordonnanceComponent},
  {path:'getordonnances',component:GetordonnanceComponent},
  {path:'uploadimgOrd',component:UploadimgOrdComponent},
  {path:'updateordonnance',component:UpdateOrdComponent},
  { path:'getcommands', component:GerercommandeComponent},
  {path:'updatecommande',component:UpdatecommandeComponent},
  // {path:'Commande', component:AddcommandeComponent},

  // {path:'Commande', component:AddcommandeComponent,
  // children:[{
  //    path:'getcommands', component:GerercommandeComponent
  // }]},


  {
    path: 'commande',
    component: AllTemplateUserComponent,
    children: [{
      path: 'getcommands', component: GerercommandeComponent
    }]
  },
  {
    path: 'commande',
    component: AllTemplateUserComponent,
    children: [{
      path: 'Commande', component: AddcommandeComponent
    }]
  }
  ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
