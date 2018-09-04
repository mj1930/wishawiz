import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from "../../core/_services/modal.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation:ViewEncapsulation.None,
  
})
export class NavComponent implements OnInit {
  message: string;

  constructor(private modal : ModalService,private toastr: ToastrService) { }

  ngOnInit() {
    
  }

  showLoginModal() {
    console.log(1);
    this.modal.toggleLogin(true);
  }
 
}
