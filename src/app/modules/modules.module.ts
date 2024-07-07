import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgToastModule} from "ng-angular-popup";
import {HttpClientModule} from "@angular/common/http";
import { ModulesRoutingModule } from './modules-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    NgToastModule,
    HttpClientModule
  ]
})
export class ModulesModule { }
