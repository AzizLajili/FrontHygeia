import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { LoginComponent } from './frontOffice/login/login.component';
import { ListUsersComponent } from './backOffice/list-users/list-users.component';
import { BodyComponent } from './frontOffice/body/body.component';
import { FullRegisterComponent } from './frontOffice/full-register/full-register.component';
import { PublicationsComponent } from './frontOffice/publications/publications.component';
import { PublicationbyidComponent } from './frontOffice/publicationbyid/publicationbyid.component';

const routes: Routes = [{
  
  path:'admin',  component:AllTemplateAdminComponent,
  children:[{
    path:'admin',component:BodyAdminComponent
  }
]},

{  path:'login',  component:LoginComponent,},
{  path:'', component:AllTemplateUserComponent,},
{
  path:'profile',  component:AllTemplateAdminComponent,
  children:[{
      path:'listusers',
      component:ListUsersComponent
    }]},
    {
      path:'profile',  component:AllTemplateAdminComponent,
      children:[{
          path:':param',
          component:BodyAdminComponent
        },
        {
          path:':param/modifpublication/:id',
          component:BodyAdminComponent
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
        }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
