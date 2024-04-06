import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  url = '';

  constructor(private _HttpClient:HttpClient) {}

  sendUserData(data:any) {
    console.log(data)
  }

  // saveUserData(data:any) {
  //   return this._HttpClient.post(this.url, data);
  // }
}
