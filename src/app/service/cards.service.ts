import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Card } from '../models/card.model';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
  

  baseUrl='https://localhost:44328/api/Payment'

  constructor(private http: HttpClient) { }

  //get all cards
  getAllCards(): Observable<Card[]>
  {
    return this.http.get<Card[]>(this.baseUrl);
  }

  adddata(data:Data): Observable<Data>{

    return this.http.post<Data>(this.baseUrl , data)
  }

}
