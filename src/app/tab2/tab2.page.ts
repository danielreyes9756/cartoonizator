import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  changeTheme(event){
    document.body.setAttribute('color-theme', event.detail.checked)
  }

}
