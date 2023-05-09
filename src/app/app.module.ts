import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { FooterComponent } from './frontOffice/footer/footer.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyComponent } from './frontOffice/body/body.component';
import { HeaderComponent } from './frontOffice/header/header.component';
import { LoginComponent } from './frontOffice/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './backOffice/list-users/list-users.component';
import { MedicamentListComponent } from './frontOffice/medicament-list/medicament-list.component';
import { PharmacieListComponent } from './pharmacie-list/pharmacie-list.component';
import { MedicamentFormComponent } from './medicament-form/medicament-form.component';
import { PharmacieFormComponent } from './pharmacie-form/pharmacie-form.component';
import { PharmacieDetailComponent } from './pharmacie-detail/pharmacie-detail.component';
import { MedicamentDetailComponent } from './medicament-detail/medicament-detail.component';
import { MapComponent } from './map/map.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    BodyAdminComponent,
    AllTemplateAdminComponent,
    FooterComponent,
    AllTemplateUserComponent,
    BodyComponent,
    HeaderComponent,
    LoginComponent,
    ListUsersComponent,
    MedicamentListComponent,
    PharmacieListComponent,
    MedicamentFormComponent,
    PharmacieFormComponent,
    PharmacieDetailComponent,
    MedicamentDetailComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
