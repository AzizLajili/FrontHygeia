import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { LoginComponent } from './frontOffice/login/login.component';
import { ListUsersComponent } from './backOffice/list-users/list-users.component';
import { BodyComponent } from './frontOffice/body/body.component';
import { MedicamentListComponent } from './frontOffice/medicament-list/medicament-list.component';
import { PharmacieListComponent } from './pharmacie-list/pharmacie-list.component';
import { MedicamentFormComponent } from './medicament-form/medicament-form.component';
import { PharmacieFormComponent } from './pharmacie-form/pharmacie-form.component';
import { PharmacieDetailComponent } from './pharmacie-detail/pharmacie-detail.component';
import { MedicamentDetailComponent } from './medicament-detail/medicament-detail.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [{
  path: 'admin', component: AllTemplateAdminComponent,
  children: [{
    path: 'admin', component: BodyAdminComponent,

  },
  {
    path: ':param', component: BodyAdminComponent
  },
  { path: 'medicament', component: MedicamentListComponent },
 
  ]
},
{ path: 'login', component: LoginComponent, },
{
  path: '', component: AllTemplateUserComponent,
  children: [{
    path: 'pharmacie',
    component: PharmacieListComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  

  {
    path: 'addmedic',
    component: MedicamentFormComponent
  },
  {
    path: 'medics',
    component: MedicamentListComponent
  },
  {
    path: 'addpharm',
    component: PharmacieFormComponent
  },
  {
    path: 'pharmdet/:id',
    component: PharmacieDetailComponent
  },
  { path: 'medicament/:nom', component: MedicamentDetailComponent },
]
},
{
  path: 'admin', component: AllTemplateAdminComponent,
  children: [{
    path: 'listusers',
    component: ListUsersComponent,
    
  }]
},
{ path: '', component: AllTemplateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
