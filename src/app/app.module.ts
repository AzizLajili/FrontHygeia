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
import { OrdonnanceComponent } from './frontOffice/ordonnance/ordonnance.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import { DelordonnanceComponent } from './frontOffice/delordonnance/delordonnance.component';
import { GetordonnanceComponent } from './frontOffice/getordonnance/getordonnance.component';
import { UploadimgOrdComponent } from './frontOffice/uploadimg-ord/uploadimg-ord.component';
import { UpdateOrdComponent } from './frontOffice/update-ord/update-ord.component';
import { DeletecommandeComponent } from './frontOffice/commande/deletecommande/deletecommande.component';
import { UpdatecommandeComponent } from './frontOffice/commande/updatecommande/updatecommande.component';
import { GerercommandeComponent } from './frontOffice/commande/gerercommande/gerercommande.component';
import { AddcommandeComponent } from './frontOffice/commande/addcommande/addcommande.component';



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
    OrdonnanceComponent,
    DelordonnanceComponent,
    GetordonnanceComponent,
    UploadimgOrdComponent,
    UpdateOrdComponent,
    DeletecommandeComponent,
    UpdatecommandeComponent,
    GerercommandeComponent,
    AddcommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
