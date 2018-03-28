import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  masterKegList: Keg[] = [
    new Keg("Shiner Bock", "Shiner Co.", 6, 4.6, 124),
    new Keg("Turkey Brew", "Butterball", 5, 3.2, 124),
    new Keg("Ranier", "Enbev", 4, 4.0, 124),
    new Keg("Duff", "Duff", 7, 5.2, 124)
  ];
  selectedEditKeg: Keg

  newKeg(newKeg) {
    this.masterKegList.push(newKeg);
  }

  finishEditing(){
    this.selectedEditKeg = null;
  }
}
