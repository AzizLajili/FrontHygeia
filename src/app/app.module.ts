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
import { CreateTreatmentComponent } from './create-treatment/create-treatment.component';
import { UpdateTreatmentComponent } from './update-treatment/update-treatment.component';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';
import { TreatmentListComponent } from './treatment-list/treatment-list.component';

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
    CreateTreatmentComponent,
    UpdateTreatmentComponent,
    TreatmentDetailsComponent,
    TreatmentListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
