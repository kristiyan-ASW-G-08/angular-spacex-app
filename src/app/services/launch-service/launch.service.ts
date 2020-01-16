import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Launch from "src/app/models/Launch";

@Injectable({
  providedIn: "root"
})
export class LaunchService {
  constructor(private http: HttpClient) {}

  getLaunches(): Promise<Launch[]> {
    return this.http
      .get<Launch[]>("https://api.spacexdata.com/v3/launches")
      .toPromise();
  }
}
