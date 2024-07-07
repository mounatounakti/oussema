import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private Posts_url = "http://localhost:8080/api/v1/posts"

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(this.Posts_url)
  }
  getStats() {
    return this.http.get(this.Posts_url+"/analytics")
  }

}
