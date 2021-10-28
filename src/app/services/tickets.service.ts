import { Show } from './../interfaces/show';
import { Login } from './../interfaces/login';
import { Register } from './../interfaces/register';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  public postRegister(register: Register) {
    console.log(register);
  }

  public postLogin(login: Login) {
    console.log(login);
  }

  public getShows() {
    const shows: Show[] = [
      { photo: 'photo', name: 'name', address: 'local', datetime: new Date(), price: 123 },
      { photo: 'photo', name: 'name', address: 'local', datetime: new Date(), price: 456 }
    ]
    console.log(shows);
  }

}
