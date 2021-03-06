import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent  {
  @Input() childEditKeg: Keg;
  @Output() clickedDone = new EventEmitter();

  finishEditing() {
    this.clickedDone.emit();
  }

  constructor() { }


}
