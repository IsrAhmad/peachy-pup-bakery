import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  url = 'http://upskilling-egypt.com:3001/contact';

  constructor(private _HttpClient:HttpClient) {}

  sendUserData(data:any) {
    console.log(data)
  }

  contactUs(userData:object):Observable<any> {
    return this._HttpClient.post(this.url, userData)
  }

  // saveUserData(data:any) {
  //   return this._HttpClient.post(this.url, data);
  // }
}


