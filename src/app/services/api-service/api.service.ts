import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Launch from "src/app/models/Launch";

@Injectable({
  providedIn: "root"
})
export class APIService {
  constructor(private http: HttpClient) {}
  apiURL: string = "https://api.spacexdata.com/v3/";

  getLaunches(): Promise<Launch[]> {
    return this.http
      .get<Launch[]>("https://api.spacexdata.com/v3/launches")
      .toPromise();
  }
  get<T>(urlExtension: string): Promise<T[]> {
    console.log(`${this.apiURL}${urlExtension}`);
    return this.http.get<T[]>(`${this.apiURL}${urlExtension}`).toPromise();
  }
}