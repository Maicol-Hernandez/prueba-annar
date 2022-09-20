import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }


  postRequestRegistroUsers(route: string, data?: any, token?: string) {
    let config: any = {
      reponseType: "json"
    }

    if (token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['header'] = header;

    }
    return this.http.post(route, data, config);
  }


  getRequestUssers(route: string, token?: string) {

    let config: any = {
      responseType: "json"
    }

    if (token) {
      const heder = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['headers'] = heder
    }
    return this.http.get(route, config);
  }


}


