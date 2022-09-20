import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  _url = "http://190.60.101.59:6003/api/Personas?id=1"
  _urlPost = "http://190.60.101.59:6003/api/Personas/"
  // _url = "https://jsonplaceholder.typicode.com/todos/10"
  constructor(
    private http: HttpClient
  ) { }


  postRequestRegistroUsers(data?: any) {
    let config: any = {
      reponseType: "json"
    }

    
      const headers = new HttpHeaders().set('Type-content', 'aplication/json')


    return this.http.post(this._urlPost, data, { headers: headers });
  }

  getRequestUssers() {

    const headers = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get(this._url, { headers: headers });
  }


}


