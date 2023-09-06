import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  header = new HttpHeaders().set(
    'Authorization',
    'Bearer pat2SVUrM1qNxMO3m.c5a8d6795f239173fe2f1a1081a90d8f32405e1de3d15b62dcf50ceb707538ca'
  );

  baseUrl = 'https://api.airtable.com/v0/appFjAIutgJPFXgAt/tbloipCkfQO4EjrKA';

  user = {};

  getDatas() {
    // return this.http.get('../../../assets/data.json');
  }

  get() {
    return this.http.get(this.baseUrl, { headers: this.header });
  }

}
