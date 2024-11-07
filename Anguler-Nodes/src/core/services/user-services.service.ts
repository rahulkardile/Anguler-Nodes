import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { 

  }

  BASE_USER = 'https://dummyjson.com';

  getUser(id:String){
    return this.http.get(`${this.BASE_USER}/users/${id}`);
  }

  getAllUser(){
    return this.http.get(`${this.BASE_USER}/users`);
  }

}
