import { Component, Input, Output, EventEmitter, SecurityContext } from '@angular/core';
import { Keg } from '../models/keg.model';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent  {
  @Input() childKegList: Keg[];
  @Output() editClickSender = new EventEmitter();
  constructor(private sanitizer: DomSanitizer) {
  //   this.html = sanitizer.bypassSecurityTrustStyle("{{levelCheck(keg)}}");
  //  }

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

  levelCheck(keg: Keg){
    let x = 124;
    let y = keg.level;
    let z = x - y;
    let result = (z/x) * 100;
    return result;
  }
}
