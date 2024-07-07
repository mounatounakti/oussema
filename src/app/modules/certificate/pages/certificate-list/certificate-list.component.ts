import { Component } from '@angular/core';
import {CertifiateService} from "../../../../core/services/certifiate.service";

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.sass']
})
export class CertificateListComponent {

  certificates : any[] = []

    constructor(private certificateService: CertifiateService) { }

    ngOnInit(): void {
    }

  getCertificates() {
    return this.certificateService.getCertificates()
      .subscribe({
        next: (data: any) => {
          this.certificates = data;
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
      });
  }



}
