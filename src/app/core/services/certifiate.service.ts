import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CertifiateService {

  private certificatesUrl = "http://localhost:8089/certificats"

  constructor(private http: HttpClient) {
  }

  getCertificates() {
    return this.http.get(this.certificatesUrl)
  }
}
