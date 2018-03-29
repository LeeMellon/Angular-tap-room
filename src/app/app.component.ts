import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  masterKegList: Keg[] = [
    new Keg("Shiner Bock", "Shiner Co.", "6.00", "4.6","https://lh3.googleusercontent.com/gfiTR3LQOBtYyZUklBwL7IX-_wMJTYDhKETXGY1qyqK6P2ARWliQkFdKxh3uWzqChCeisYrlm9H_kux2lI0M5jSUjacG_A=s750", 14),
    new Keg("Turkey Brew", "Butterball", "5.00", "3.2", "http://www.monogramfoods.com/site/assets/files/1316/butterball-logo.png", 124),
    new Keg("Ranier", "Enbev", "4.00", "4.0", "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/102014/rainier.png?itok=JsSEd8ne", 124),
    new Keg("Duff", "Duff", "7.00", "5.2", "https://i.pinimg.com/originals/46/46/9e/46469ea430bf509f172a308988e86c8a.png", 124)
  ];
  selectedEditKeg: Keg

  newKeg(newKeg) {
    this.masterKegList.push(newKeg);
  }

  editKedClicked(clickedEditKeg){
    this.selectedEditKeg = clickedEditKeg;
  }

  finishEditing(){
    this.selectedEditKeg = null;
  }

}
