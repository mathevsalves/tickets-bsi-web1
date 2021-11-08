import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Show } from 'src/app/interfaces/show';
import { ShowBuy } from '../interfaces/show-buy';
import { User } from '../interfaces/user';
import { Login } from './../interfaces/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  shows: Show[] = [
    {
      id: 1,
      photo: '/assets/img/ze-vaqueiro.jpg',
      name: 'Zé Vaqueiro',
      address: 'Caruaru - PE',
      dateShow: this.setDateShow(23, 0, 10),
      price: 300,
      description: 'Cantor Zé Vaqueiro'
    },
    {
      id: 2,
      photo: '/assets/img/thiaguinho.jpg',
      name: 'Thiaguinho',
      address: 'São Paulo - SP',
      dateShow: this.setDateShow(20, 45, 5),
      price: 220,
      description: 'Cantor Thiaguinho'
    },
    {
      id: 3,
      photo: '/assets/img/projota.jpg',
      name: 'Projota',
      address: 'Rio de Janeiro - RJ',
      dateShow: this.setDateShow(16, 30, 26),
      price: 175,
      description: 'Cantor Projota'
    }
  ];

  constructor(private http: HttpClient) { }

  public postRegister(register: User): Observable<User> {
    const url = `${environment.api}/users`;
    return this.http.post<User>(url, register);
  }

  public postLogin(login: Login) {
    const url = `${environment.api}/users/login`;
    return this.http.post<User>(url, login);
  }

  public findAllShows(): Observable<Show[]> {
    this.shows.sort((a, b) => a.dateShow > b.dateShow ? 1 : -1);
    let showsObservable: BehaviorSubject<Show[]> = new BehaviorSubject(this.shows);
    return showsObservable.asObservable();
  }

  public findByIdShow(id: number): Observable<Show> {
    const show = this.shows.find(find => find.id == id);
    let showObservable: BehaviorSubject<Show> = new BehaviorSubject(show as Show);
    return showObservable.asObservable();
  }

  public buyShow(show: ShowBuy): Observable<boolean> {
    const number = parseInt((Math.random() * 1000).toString());
    let showObservable: BehaviorSubject<boolean> = new BehaviorSubject(number % 2 == 0);
    return showObservable.asObservable();
  }

  private setDateShow(hours: number, minutes: number, moreDay: number) {
    const date = new Date().setHours(hours, minutes);
    const oneDay = 24 * 60 * 60 * 1000;
    return new Date(date + (oneDay * moreDay));
  }

}
