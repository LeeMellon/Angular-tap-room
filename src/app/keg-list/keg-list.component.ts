import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent  {
  @Input() childKegList: Keg[];
  @Output() editClickSender = new EventEmitter();
  constructor() { }

  editClick(keg: Keg){
    this.editClickSender.emit(keg);
  }

  pint(keg: Keg){
    keg.level -= 1;
  }

  howler(keg: Keg){
    keg.level -= 2;
  }

  growler(keg: Keg){
    keg.level -= 4;
  }

}
