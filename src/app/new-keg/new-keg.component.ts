import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
import * as $ from 'jquery';


@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent  {
  @Output() createSender = new EventEmitter();

  create(name: string,  brand: string,  price: string,  abv: string, img:string,  level: string) {
    let newKeg = new Keg(name, brand, price, abv, img, parseInt(level))
    this.createSender.emit(newKeg);
    $(".new-keg").fadeOut(300, "swing");
  }

  showAddDiv(){
    $(".new-keg").fadeIn(300, "swing");
  }

  constructor() { }



}
