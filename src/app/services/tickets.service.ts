import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Show } from 'src/app/interfaces/show';
import { Login } from './../interfaces/login';
import { Register } from './../interfaces/register';

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
      dateShow: this.setDateShow(16, 30, 9),
      price: 175,
      description: 'Cantor Projota'
    }
  ];

  constructor(private http: HttpClient) { }

  public postRegister(register: Register) {
    console.log(register);
  }

  public postLogin(login: Login) {
    console.log(login);
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

  private setDateShow(hours: number, minutes: number, moreDay: number) {
    const date = new Date().setHours(hours, minutes);
    const oneDay = 24 * 60 * 60 * 1000;
    return new Date(date + (oneDay * moreDay));
  }

}
