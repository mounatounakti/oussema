import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateListComponent } from './pages/certificate-list/certificate-list.component';


@NgModule({
    declarations: [
        CertificateListComponent
    ],
    exports: [
        CertificateListComponent
    ],
    imports: [
        CommonModule,
        CertificateRoutingModule
    ]
})
export class CertificateModule { }
