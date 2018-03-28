import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent  {
  @Output() createSender = new EventEmitter();

  create(name: string,  brand: string,  price: string,  abv: string,  level: string) {
    let newKeg = new Keg(name, brand, parseInt(price), parseInt(abv), parseInt(level))
    this.createSender.emit(newKeg);
  }

  constructor() { }



}
