import { Component, OnInit } from '@angular/core';
import { CardsService } from './service/cards.service';
import { Data } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PaymentApp';
  datas:Card[]=[];
  card : Card = {
   
    CardOwnerName:'',
    CardNumber:'',
    ExpirationDate:'',
    SecurityCode:''
  }

  constructor(private cardsService: CardsService){

  }
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(){
    this.cardsService.getAllCards()
    .subscribe(
      response=>{
        console.log(response);
      }
    );

  }

  onsubmit(){
    this.cardsService.adddata(this.card)
    .subscribe(
      Response => {
        console.log(Response);
      }
      )
    }
  }