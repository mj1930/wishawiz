import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  title = 'app';
  ngOnInit(){
   
    sessionStorage.setItem('blsHeader', JSON.stringify({
      'appName':'wishaWiz',
      'deviceType':'webApp',
      'sessionID':'86abf944-3344-4afd-9fb6-454566c66457'
      }));
      sessionStorage.setItem('email','as19ish@gmail.com');

  }
}
