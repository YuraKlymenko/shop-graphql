import { Component } from '@angular/core';
import { SenddataService } from 'src/app/services/senddata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private sendRouteNameService: SenddataService) { }
  sendRoute(name: string) {
    this.sendRouteNameService.getBreadcrumbNameMethod(name)
  }
}
