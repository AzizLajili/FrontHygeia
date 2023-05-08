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
import { LoginComponent } from './frontOffice/login/login.component';
import { ListUsersComponent } from './backOffice/list-users/list-users.component';
import { BodyComponent } from './frontOffice/body/body.component';
import { FullRegisterComponent } from './frontOffice/full-register/full-register.component';
import { NotFoundComponent } from './frontOffice/not-found/not-found.component';
import { HomeComponent } from './frontOffice/home/home.component';
import { PublicationsComponent } from './frontOffice/publications/publications.component';
import { PublicationbyidComponent } from './frontOffice/publicationbyid/publicationbyid.component';
import { UpdatePublicationComponent } from './backOffice/update-publication/update-publication.component';





const routes: Routes = [{path:'admin',  component:AllTemplateAdminComponent,
  children:[{path:'admin',component:BodyAdminComponent}

]},
  //
  // { path:'ordonnance', component:OrdonnanceComponent},
  // {path:'delordonnance',component:DelordonnanceComponent},
  // {path:'getordonnances',component:GetordonnanceComponent},
  // {path:'uploadimgOrd',component:UploadimgOrdComponent},
  // {path:'updateordonnance',component:UpdateOrdComponent},
  // { path:'getcommands', component:GerercommandeComponent},
  // {path:'updatecommande',component:UpdatecommandeComponent},
  {
    path: '',
    component: AllTemplateUserComponent,
    children: [
      {path: 'Commande', component: AddcommandeComponent},
      {path: 'getcommands', component: GerercommandeComponent}]
  },
  {
    path: '',
    component: AllTemplateUserComponent,
    children: [

      { path:'ordonnance', component:OrdonnanceComponent},
      {path:'delordonnance',component:DelordonnanceComponent},
      {path:'getordonnances',component:GetordonnanceComponent},
      {path:'uploadimgOrd/:idord',component:UploadimgOrdComponent},
      {path:'updateordonnance/:id',component:UpdateOrdComponent}]
  },



{  path:'login',  component:LoginComponent,},
{  path:'', component:AllTemplateUserComponent,children:[{path:'home',component:HomeComponent},{path:'',component:HomeComponent}]},
{  path:'profile',  component:AllTemplateAdminComponent,
  children:[{ path:'listusers', component:ListUsersComponent}]},
{  path:'profile',  component:AllTemplateAdminComponent,
    children:[{ path:':param',component:BodyAdminComponent}]},
{  path:'',  component:AllTemplateUserComponent,children:[{ path:'register', component:FullRegisterComponent},{ path:'', component:BodyComponent}]},


{  path:'', component:AllTemplateUserComponent,},
{
  path:'profile',  component:AllTemplateAdminComponent,
  children:[{
      path:'listusers',
      component:ListUsersComponent
    },
  ]},
    {
      path:'profile',  component:AllTemplateAdminComponent,
      children:[{
          path:':param',
          component:BodyAdminComponent
        },
        {
          path:'modifpublication/:idPub',
          component:UpdatePublicationComponent
        },
      ]
      },
      {
        path:'',  component:AllTemplateUserComponent,
        children:[{
            path:'register',
            component:FullRegisterComponent
          },
          {
            path:'publications',
            component: PublicationsComponent
          },
          {
            path:'publications/:id',
            component: PublicationbyidComponent
          }
        ]
        },
        {  path:'**',  component:AllTemplateUserComponent, children:[{ path:'', component:NotFoundComponent}]
      },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
