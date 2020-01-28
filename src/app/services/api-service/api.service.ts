import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class APIService {
  constructor(private http: HttpClient) {}
  apiURL: string = "https://api.spacexdata.com/v3/";
  get<T>(urlExtension: string): Promise<T[]> {
    return this.http.get<T[]>(`${this.apiURL}${urlExtension}`).toPromise();
  }
}
