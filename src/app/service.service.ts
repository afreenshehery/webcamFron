import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  webcam(data: any) {
    console.log(data);

    return this.http.post<{ data: any }>(`${this.url}/webcam`, data);
  }

  getwebcam() {
    return this.http.get<{ DoctorInfo: any }>(`${this.url}/getwebcam`);
  }
}
