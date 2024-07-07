import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ForumModule } from './modules/forum/forum.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModulesModule} from "./modules/modules.module";
import {AuthenticationModule} from "./modules/authentication/authentication.module";
import {CertificateModule} from "./modules/certificate/certificate.module";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    AuthenticationModule,
    CertificateModule,
    ForumModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
